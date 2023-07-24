import Button from '@/strum/Button';
import { Check, Copy } from 'lucide-react';
import { useContext } from 'react';
import { CodeBlockContext } from './CodeBlock';

interface CopyButtonProps {
  copy: () => void;
}

export default function CopyButton({ copy }: CopyButtonProps) {
  const { copySuccess } = useContext(CodeBlockContext);

  return (
    <Button
      className="h-8 w-8 rounded-full p-0"
      color={copySuccess ? 'success' : 'neutral'}
      onClick={copy}
      size="sm"
    >
      <span className="sr-only">
        {!copySuccess && 'Copy'}
        {copySuccess && 'Copied!'}
      </span>
      {!copySuccess && <Copy size="1em" />}
      {copySuccess && <Check size="1em" />}
    </Button>
  );
}
