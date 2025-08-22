import CopyButton from './CopyButton';

interface CodeSnippetHeaderProps {
  copy: () => void;
  enableCopy: boolean;
  text: string;
}

export default function CodeSnippetHeader({
  copy,
  enableCopy,
  text,
}: CodeSnippetHeaderProps) {
  return (
    <pre className="bg-neutral-2 flex items-center justify-between rounded-t-md px-4 py-2">
      <div className="text-sm">{text}</div>

      {enableCopy && <CopyButton copy={copy} />}
    </pre>
  );
}
