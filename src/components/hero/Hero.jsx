import React from 'react';
import styles from './hero.module.css';
import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      {/* Left Column */}
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Hello World!</h1>
          <p className={styles.heroDescription}>
            I'm Mahnoor Faisal <br />
            Web Developer | Front-End Developer | UI/UX Enthusiast | Problem Solver
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.splineSection}>
        <Spline
          scene="https://prod.spline.design/vrT9UN2wYeLdGY2R/scene.splinecode"
          style={{ width: '100%', height: '100%', maxHeight: '100%' }}
        />
      </div>
    </section>
  );
};

export default Hero;
