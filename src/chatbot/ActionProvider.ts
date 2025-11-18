import i18n from '../i18n';

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

  async handleApiRequest(userMessage: string) {
    try {
      const response = await fetch("https://k13c102.p.ssafy.io/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
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

