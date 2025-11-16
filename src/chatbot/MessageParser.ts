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

    // 특정 키워드는 로컬 응답, 나머지는 API 호출
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("안녕")) {
      this.actionProvider.greet();
    } else {
      // API로 메시지 전송
      this.actionProvider.handleApiRequest(trimmedMessage);
    }
  }
}

export default MessageParser;

