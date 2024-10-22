import ButtonLink from '@/strum/ButtonLink';
import { useMDXComponent } from 'next-contentlayer2/hooks';

interface SocialLinkProps {
  href: string;
  icon: string;
  name: string;
}

export default function SocialLink({ href, icon, name }: SocialLinkProps) {
  const Icon = useMDXComponent(icon);

  return (
    <ButtonLink
      className="flex h-14 w-14 items-center justify-center rounded-full p-0"
      href={href}
    >
      <span className="sr-only">{name}</span>
      <Icon />
    </ButtonLink>
  );
}
