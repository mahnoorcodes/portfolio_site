import React from 'react';
import styles from './hero.module.css';
import heroImage from '../../assets/hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFolderOpen, faFileLines, faFileCode, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export const Hero = ({ onScrollTo, refs }) => {
  return (   
      <section id="hero" className={styles.heroSection}>
        <ul className={styles.iconBox}>
          <li className={styles.iconLink} onClick={() => onScrollTo(refs.aboutRef)}>
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
            <span>aboutme.txt</span>
          </li>
          <li className={styles.iconLink} onClick={() => onScrollTo(refs.projectsRef)}>
            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />
            <span>projects</span>
          </li>
          <li className={styles.iconLink} onClick={() => onScrollTo(refs.skillsRef)}>
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
            <span>myskills.txt</span>
          </li>
          <li className={styles.iconLink} onClick={() => onScrollTo(refs.skillsRef)}>
            <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
            <span>techstack.doc</span>
          </li>
          <li className={styles.iconLink} onClick={() => onScrollTo(refs.cvRef)}>
            <FontAwesomeIcon icon={faFilePdf} className={styles.icon} />
            <span>cv-resume.pdf</span>
          </li>
        </ul>

        <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>HELLO WORLD!</h1> 
          <img 
            src={heroImage}
            alt="Hero Image" 
            className={styles.heroImage} 
          />   
            <p className={styles.heroDescription}>
              I'M MAHNOOR FAISAL <br />
              I build cool stuff for the web and apps,
              and I'm all about tech and design🚀
            </p>
          </div>
        </div>
      </section>         
  );
};
