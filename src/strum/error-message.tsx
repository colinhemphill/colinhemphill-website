import { PropsWithChildren } from 'react';

interface ErrorMessageProperties {
  describes: string;
}

export default function ErrorMessage({
  children,
  describes,
}: PropsWithChildren<ErrorMessageProperties>) {
  return (
    <div id={describes} className="text-danger-7 dark:text-danger-6 text-sm">
      {children}
    </div>
  );
}
