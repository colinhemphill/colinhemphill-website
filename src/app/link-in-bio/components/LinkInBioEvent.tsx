'use client';

import Alert from '@/strum/Alert';
import { useSearchParams } from 'next/navigation';

export default function LinkInBioEvent() {
  const searchParams = useSearchParams();
  const event = searchParams.get('event');

  if (!event) {
    return null;
  }

  return (
    <Alert className="mb-8" color="primary">
      Hi there, it was nice to meet you at <strong>{event}</strong>! Here you’ll
      find links to my personal projects and to other places you can find me on
      the internet.
    </Alert>
  );
}
