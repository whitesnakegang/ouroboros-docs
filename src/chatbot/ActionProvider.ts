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

  greet() {
    const message = this.createChatBotMessage("안녕하세요! Ouroboros 문서에 오신 것을 환영합니다.", {});
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleHelp() {
    const message = this.createChatBotMessage(
      "도움이 필요하시군요! Ouroboros에 대해 궁금한 점이 있으시면 언제든지 물어보세요.",
      {}
    );
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

}

export default ActionProvider;

