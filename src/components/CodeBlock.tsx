import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(t('common.copyFailed'), err);
    }
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        {language && <span className="code-block-language">{language}</span>}
        <button
          className="code-block-copy-button"
          onClick={handleCopy}
          aria-label={t('common.copyCode')}
          title={t('common.copyCode')}
        >
          {copied ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 4L6 11.5L2.5 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="5"
                width="8"
                height="8"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M3 11V3C3 2.44772 3.44772 2 4 2H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      <pre className="code-block-content">
        <code>{code}</code>
      </pre>
    </div>
  );
}

