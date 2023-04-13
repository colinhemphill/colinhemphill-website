import ButtonLink from '@/strum/ButtonLink';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  Icon: LucideIcon;
  name: string;
}

export default function SocialLink({ href, Icon, name }: SocialLinkProps) {
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
