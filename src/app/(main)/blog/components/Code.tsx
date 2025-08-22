'use client';

import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { CodeBlockContext } from './CodeBlock';

export default function Code({
  children,
  className,
}: PropsWithChildren<WithClassName>) {
  const { codeRef } = useContext(CodeBlockContext);

  return (
    <div className="text-neutral-12">
      <div
        className={twMerge('overflow-x-auto p-4 whitespace-pre', className)}
        ref={codeRef}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
