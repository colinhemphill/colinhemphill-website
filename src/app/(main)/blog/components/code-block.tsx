'use client';

import {
  PropsWithChildren,
  RefObject,
  createContext,
  useRef,
  useState,
} from 'react';
import CodeSnippetHeader from './code-snippet-header';
import CopyButton from './copy-button';

interface CodeBlockProperties {
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
}: PropsWithChildren<CodeBlockProperties>) {
  const codeReference = useRef<HTMLDivElement>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copy = () => {
    const text = codeReference.current?.textContent;

    if (text) {
      globalThis.clearTimeout(textTimeout);
      navigator.clipboard.writeText(text);

      setCopySuccess(true);
      textTimeout = setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  };

  return (
    <CodeBlockContext.Provider value={{ codeRef: codeReference, copySuccess }}>
      <div className="border-neutral-6 bg-neutral-1 relative my-8 rounded-lg border">
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
