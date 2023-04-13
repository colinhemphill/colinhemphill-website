import { PropsWithChildren } from 'react';

export default function CodeInline({ children }: PropsWithChildren) {
  return (
    <code className="whitespace-normal rounded-md border border-neutral-3 bg-neutral-2 px-1 font-mono">
      {children}
    </code>
  );
}
