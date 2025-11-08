import ButtonLink from '@/strum/button-link';
import { Link } from '@content';
import { useMDXComponent } from 'next-contentlayer2/hooks';

export default function LinkInBioButton({ body, name, url }: Link) {
  const Icon = useMDXComponent(body.code);

  return (
    <ButtonLink className="flex items-center justify-center gap-2" href={url}>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Icon />
      {name}
    </ButtonLink>
  );
}
