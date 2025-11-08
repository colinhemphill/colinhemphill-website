'use client';

import Alert from '@/strum/alert';
import { useSearchParams } from 'next/navigation';

export default function LinkInBioEvent() {
  const searchParameters = useSearchParams();
  const event = searchParameters.get('event');

  if (!event) {
    return;
  }

  return (
    <Alert className="mb-8" color="primary">
      Hi there, it was nice to meet you at <strong>{event}</strong>! Here you’ll
      find links to my personal projects and to other places you can find me on
      the internet.
    </Alert>
  );
}
