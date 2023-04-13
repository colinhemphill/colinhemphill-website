'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CodeBlockContext } from './CodeBlock';

interface CodeProps {
  className?: string;
}

export default function Code({
  children,
  className,
}: PropsWithChildren<CodeProps>) {
  const { codeRef } = useContext(CodeBlockContext);

  return (
    <div className="text-neutral-0 dark:text-neutral-10">
      <div
        className={twMerge('overflow-x-auto whitespace-pre p-4', className)}
        ref={codeRef}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
