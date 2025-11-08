import Button from '@/strum/button';
import { Check, Copy } from 'lucide-react';
import { useContext } from 'react';
import { CodeBlockContext } from './code-block';

interface CopyButtonProperties {
  copy: () => void;
}

export default function CopyButton({ copy }: CopyButtonProperties) {
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
