import CopyButton from './CopyButton';

interface CodeSnippetHeaderProps {
  copy: () => void;
  text: string;
}

export default function CodeSnippetHeader({
  copy,
  text,
}: CodeSnippetHeaderProps) {
  return (
    <pre className="flex items-center justify-between rounded-t-md bg-neutral-2 px-4 py-2">
      <div className="text-sm">{text}</div>

      <CopyButton copy={copy} />
    </pre>
  );
}
