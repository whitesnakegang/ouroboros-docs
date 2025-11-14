class MessageParser {
  actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    // 빈 메시지 체크 (공백만 있는 경우도 제외)
    const trimmedMessage = message.trim();
    if (!trimmedMessage || trimmedMessage.length === 0) {
      return; // 빈 메시지는 처리하지 않음
    }

    const lowerCaseMessage = trimmedMessage.toLowerCase();

    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("안녕")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("help") || lowerCaseMessage.includes("도움")) {
      this.actionProvider.handleHelp();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;

