import ButtonLink from '@/strum/ButtonLink';
import { Link } from '@content';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function LinkInBioButton({ body, name, url }: Link) {
  const Icon = useMDXComponent(body.code);

  return (
    <ButtonLink className="flex items-center justify-center gap-2" href={url}>
      <Icon />
      {name}
    </ButtonLink>
  );
}
