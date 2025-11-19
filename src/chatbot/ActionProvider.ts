import i18n from '../i18n';

const SESSION_ID_KEY = 'ouroboros_chat_session_id';

class ActionProvider {
  createChatBotMessage: (message: string, widget?: any) => any;
  setState: (updater: (prevState: any) => any) => void;

  constructor(
    createChatBotMessage: (message: string, widget?: any) => any,
    setStateFunc: (updater: (prevState: any) => any) => void
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  /**
   * 세션 ID를 생성하거나 기존 세션 ID를 반환합니다.
   * localStorage에 저장하여 같은 브라우저에서는 동일한 세션 ID를 사용합니다.
   */
  private getOrCreateSessionId(): string {
    try {
      let sessionId = localStorage.getItem(SESSION_ID_KEY);
      
      if (!sessionId) {
        // UUID v4 형식으로 세션 ID 생성
        sessionId = this.generateSessionId();
        localStorage.setItem(SESSION_ID_KEY, sessionId);
      }
      
      return sessionId;
    } catch (error) {
      // localStorage를 사용할 수 없는 경우 (예: 사생활 보호 모드)
      console.warn('localStorage를 사용할 수 없습니다. 임시 세션 ID를 생성합니다.', error);
      return this.generateSessionId();
    }
  }

  /**
   * UUID v4 형식의 세션 ID를 생성합니다.
   */
  private generateSessionId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * 세션 ID를 저장합니다 (서버에서 새로 생성한 경우 대비).
   */
  private saveSessionId(sessionId: string): void {
    try {
      localStorage.setItem(SESSION_ID_KEY, sessionId);
    } catch (error) {
      console.warn('세션 ID를 저장할 수 없습니다.', error);
    }
  }

  async handleApiRequest(userMessage: string) {
    try {
      const sessionId = this.getOrCreateSessionId();
      
      const response = await fetch("https://k13c102.p.ssafy.io/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // 서버에서 반환한 session_id가 있으면 저장 (서버가 새로 생성한 경우 대비)
      if (data.session_id) {
        this.saveSessionId(data.session_id);
      }
      
      const botMessage = this.createChatBotMessage(data.response || i18n.t('developer.chatbot.noResponse'), {});
      
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("API 요청 실패:", error);
      const errorMessage = this.createChatBotMessage(
        i18n.t('developer.chatbot.connectionError'),
        {}
      );
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }

  greet() {
    const message = this.createChatBotMessage(i18n.t('developer.chatbot.welcome'), {});
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

}

export default ActionProvider;

