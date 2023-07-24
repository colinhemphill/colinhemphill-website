import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Separator from '@/strum/Separator';
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
