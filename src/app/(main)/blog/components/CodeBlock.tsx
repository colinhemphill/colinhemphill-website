'use client';

import {
  PropsWithChildren,
  RefObject,
  createContext,
  useRef,
  useState,
} from 'react';
import CodeSnippetHeader from './CodeSnippetHeader';
import CopyButton from './CopyButton';

interface CodeBlockProps {
  enableCopy?: boolean;
  header?: string;
}

export const CodeBlockContext = createContext<{
  codeRef?: RefObject<HTMLDivElement | null>;
  copySuccess?: boolean;
}>({});

let textTimeout: NodeJS.Timeout;

export default function CodeBlock({
  children,
  enableCopy = true,
  header,
}: PropsWithChildren<CodeBlockProps>) {
  const codeRef = useRef<HTMLDivElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copy = () => {
    const text = codeRef.current?.textContent;

    if (text) {
      window.clearTimeout(textTimeout);
      navigator.clipboard.writeText(text);

      setCopySuccess(true);
      textTimeout = setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  };

  return (
    <CodeBlockContext.Provider value={{ codeRef, copySuccess }}>
      <div className="relative my-8 rounded-lg border border-neutral-3 bg-neutral-10 font-mono dark:bg-neutral-0">
        {header && (
          <CodeSnippetHeader
            copy={copy}
            enableCopy={enableCopy}
            text={header}
          />
        )}

        <div className="flex items-center">
          <div className="flex-1 overflow-hidden">{children}</div>

          {!header && enableCopy && (
            <div className="flex-initial p-4">
              <CopyButton copy={copy} />
            </div>
          )}
        </div>
      </div>
    </CodeBlockContext.Provider>
  );
}
