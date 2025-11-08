import Link, { LinkProps } from 'next/link';

interface BreadcrumbItemProperties extends LinkProps {
  active?: boolean;
  title: string;
}

export default function BreadcrumbItem({
  active,
  href,
  title,
  ...linkProperties
}: BreadcrumbItemProperties) {
  return (
    <li className="before:text-neutral-11 before:mr-4 before:content-['/'] first:before:content-none">
      {!active && (
        <Link
          aria-current={active ? 'page' : 'false'}
          className="link"
          href={href}
          {...linkProperties}
        >
          {title}
        </Link>
      )}
      {active && <span className="text-neutral-11">{title}</span>}
    </li>
  );
}
