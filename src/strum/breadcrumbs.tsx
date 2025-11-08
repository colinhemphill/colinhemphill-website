import { PropsWithChildren } from 'react';

export default function Breadcrumbs({ children }: PropsWithChildren) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-4">{children}</ol>
    </nav>
  );
}
