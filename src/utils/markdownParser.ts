// 마크다운 코드 블록을 파싱하는 유틸리티

export interface ParsedMessage {
  parts: Array<{
    type: 'text' | 'code';
    content: string;
    language?: string;
  }>;
}

/**
 * 마크다운 코드 블록을 파싱하여 텍스트와 코드 블록을 분리
 * @param message 원본 메시지
 * @returns 파싱된 메시지 파트 배열
 */
export function parseMarkdownCodeBlocks(message: string): ParsedMessage {
  const parts: ParsedMessage['parts'] = [];
  
  // 코드 블록 패턴: ```language\ncode\n``` 또는 ```\ncode\n```
  // 언어는 선택적이며, 언어 뒤에 공백이나 줄바꿈이 올 수 있음
  // [\s\S]*?는 non-greedy로 모든 문자(줄바꿈 포함)를 매칭
  // 언어 그룹: (\w+)? - 선택적 언어 식별자
  // 코드 내용 그룹: ([\s\S]*?) - 모든 문자(줄바꿈 포함)를 non-greedy로 매칭
  const codeBlockRegex = /```(\w+)?[\s\n]*([\s\S]*?)```/g;
  
  let lastIndex = 0;
  let match;
  
  while ((match = codeBlockRegex.exec(message)) !== null) {
    // 코드 블록 이전의 텍스트 추가
    if (match.index > lastIndex) {
      const textContent = message.substring(lastIndex, match.index);
      // 앞뒤 공백만 제거하고 내부 줄바꿈은 유지
      const trimmedText = textContent.trim();
      if (trimmedText) {
        parts.push({
          type: 'text',
          content: trimmedText,
        });
      }
    }
    
    // 코드 블록 추가
    const language = match[1] || '';
    // 코드 내용의 앞뒤 공백만 제거 (내부 공백은 유지)
    const codeContent = match[2].trim();
    
    if (codeContent) {
      parts.push({
        type: 'code',
        content: codeContent,
        language: language,
      });
    }
    
    lastIndex = codeBlockRegex.lastIndex;
  }
  
  // 마지막 코드 블록 이후의 텍스트 추가
  if (lastIndex < message.length) {
    const textContent = message.substring(lastIndex);
    const trimmedText = textContent.trim();
    if (trimmedText) {
      parts.push({
        type: 'text',
        content: trimmedText,
      });
    }
  }
  
  // 코드 블록이 없는 경우 전체를 텍스트로 처리
  if (parts.length === 0) {
    parts.push({
      type: 'text',
      content: message,
    });
  }
  
  return { parts };
}

