import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import Separator from '@/strum/separator';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>

      <Separator direction="down" from={1} to={0} />
      <Footer />
    </>
  );
}
