import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Hero.module.scss';

const Hero = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <header className={styles.hero}>
        <div className="container text-white">
          <div className="row align-items-center text-sm-start text-center">
            <div className="col-sm">
              <h1>Colin Hemphill</h1>
              <h2>A web developer and noise-maker located in Austin, TX</h2>
            </div>
            <div className="col-sm-auto mt-sm-0 mt-xxs">
              <div className={classnames(styles.imageContainer, 'mx-auto')}>
                <Image
                  alt="Photograph of Colin Hemphill taken as he was preparing for his wedding ceremony"
                  className="rounded-circle"
                  height={957}
                  priority
                  src="/img/Colin-Wedding-Square.jpg"
                  width={957}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
