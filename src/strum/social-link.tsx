import ButtonLink from '@/strum/button-link';
import { useMDXComponent } from 'next-contentlayer2/hooks';

interface SocialLinkProperties {
  href: string;
  icon: string;
  name: string;
}

export default function SocialLink({ href, icon, name }: SocialLinkProperties) {
  const Icon = useMDXComponent(icon);

  return (
    <ButtonLink
      className="flex h-14 w-14 items-center justify-center rounded-full p-0"
      href={href}
    >
      <span className="sr-only">{name}</span>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Icon />
    </ButtonLink>
  );
}
