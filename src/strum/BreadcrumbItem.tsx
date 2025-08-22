import Link, { LinkProps } from 'next/link';

interface BreadcrumbItemProps extends LinkProps {
  active?: boolean;
  title: string;
}

export default function BreadcrumbItem({
  active,
  href,
  title,
  ...linkProps
}: BreadcrumbItemProps) {
  return (
    <li className="before:text-neutral-11 before:mr-4 before:content-['/'] first:before:content-none">
      {!active && (
        <Link
          aria-current={active ? 'page' : 'false'}
          className="link"
          href={href}
          {...linkProps}
        >
          {title}
        </Link>
      )}
      {active && <span className="text-neutral-11">{title}</span>}
    </li>
  );
}
