import { PropsWithChildren } from 'react';

interface ErrorMessageProps {
  describes: string;
}

export default function ErrorMessage({
  children,
  describes,
}: PropsWithChildren<ErrorMessageProps>) {
  return (
    <div id={describes} className="text-sm text-danger-7 dark:text-danger-6">
      {children}
    </div>
  );
}
