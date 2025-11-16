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
      const botMessage = this.createChatBotMessage(data.response || "응답을 받지 못했습니다.", {});
      
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("API 요청 실패:", error);
      const errorMessage = this.createChatBotMessage(
        "죄송합니다. 서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.",
        {}
      );
      this.setState((prev: any) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }

  greet() {
    const message = this.createChatBotMessage("안녕하세요! Ouroboros 문서에 오신 것을 환영합니다.", {});
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

}

export default ActionProvider;

