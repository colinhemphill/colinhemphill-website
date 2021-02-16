import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faNpm,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Offcanvas from '../components/Navbar/Offcanvas';
import ThemeProvider from '../components/Theme/ThemeProvider';
import ThemeScriptTag from '../components/Theme/ThemeScriptTag';
import '../styles/_main.scss';

config.autoAddCss = false;
library.add(faGithub, faGitlab, faLinkedin, faNpm, faTwitch, faTwitter);

export const OffcanvasContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
}>(null);

const MyApp = ({ Component, pageProps }: AppPropsType): JSX.Element => {
  const [offcanvasIsOpen, setOffcanvasIsOpen] = useState(false);
  const router = useRouter();

  const toggleOffcanvas = () => {
    setOffcanvasIsOpen(!offcanvasIsOpen);
  };

  useEffect(() => {
    const { asPath } = router;

    ReactGA.initialize('UA-81584300-1');
    ReactGA.pageview(asPath);
    ReactGA.timing({
      category: 'App',
      label: 'Initial client render',
      value: Math.round(performance.now()),
      variable: 'Load',
    });

    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeScriptTag />

      <OffcanvasContext.Provider
        value={{ isOpen: offcanvasIsOpen, toggle: toggleOffcanvas }}
      >
        <ThemeProvider>
          <Offcanvas />
          <Component {...pageProps} />
        </ThemeProvider>
      </OffcanvasContext.Provider>
    </>
  );
};

export default MyApp;
