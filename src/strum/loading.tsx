import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center text-3xl">
      <span className="sr-only">Loading</span>
      <Loader2 className="text-primary-7 animate-spin" />
    </div>
  );
}
