import { PropsWithChildren } from 'react';

export default function CodeInline({ children }: PropsWithChildren) {
  return (
    <code className="border-neutral-3 bg-neutral-2 rounded-md border px-1 font-mono whitespace-normal">
      {children}
    </code>
  );
}
