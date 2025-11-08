import CopyButton from './copy-button';

interface CodeSnippetHeaderProperties {
  copy: () => void;
  enableCopy: boolean;
  text: string;
}

export default function CodeSnippetHeader({
  copy,
  enableCopy,
  text,
}: CodeSnippetHeaderProperties) {
  return (
    <pre className="bg-neutral-2 flex items-center justify-between rounded-t-md px-4 py-2">
      <div className="text-sm">{text}</div>

      {enableCopy && <CopyButton copy={copy} />}
    </pre>
  );
}
