import React from 'react';
import styles from './hero.module.css';
import heroImage from '../../assets/hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFolderOpen, faFileLines, faFileCode, faFilePdf, faSmile } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (   
      <section className={styles.heroSection}>
        <div className={styles.iconBox}>
          <a href="/about" className={styles.iconLink}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
            <span>aboutme.txt</span>
          </a>
          <a href="/projects" className={styles.iconLink}>
            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />
            <span>projects</span>
          </a>
          <a href="/skills" className={styles.iconLink}>
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
            <span>myskills.txt</span>
          </a>
          <a href="/skills" className={styles.iconLink}>
            <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
            <span>techstack.doc</span>
          </a>
          <a href="/cv" className={styles.iconLink}>
            <FontAwesomeIcon icon={faFilePdf} className={styles.icon} />
            <span>cv-resume.pdf</span>
          </a>
        </div>

        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>HELLO WORLD {/*<FontAwesomeIcon icon={faSmile} />*/}</h1> 
          <img 
            src={heroImage}
            alt="Hero Image" 
            className={styles.heroImage} 
          />
          <br />
          <p className={styles.heroDescription}>
            I'M MAHNOOR FAISAL — <br />
            A WEB AND APP DEVELOPER,<br />
            DESIGNER AND PASSIONATE TECH LOVER
          </p>
        </div>
      </section>         
  );
};
