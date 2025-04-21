import React from 'react';
import styles from './hero.module.css';
import heroImage from '../../assets/hero.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFolderOpen, faFileLines, faFileCode, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (   
      <section id="hero" className={styles.heroSection}>
        <div className={styles.iconBox}>
          <a href="#about" className={styles.iconLink} id="about">
            <FontAwesomeIcon icon={faCircleUser} className={styles.icon} />
            <span>aboutme.txt</span>
          </a>
          <a href="#projects" className={styles.iconLink} id="projects">
            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />
            <span>projects</span>
          </a>
          <a href="#skills" className={styles.iconLink} id="skills">
            <FontAwesomeIcon icon={faFileLines} className={styles.icon} />
            <span>myskills.txt</span>
          </a>
          <a href="#skills" className={styles.iconLink} id="skills">
            <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
            <span>techstack.doc</span>
          </a>
          <a href="#cv" className={styles.iconLink} id="cv">
            <FontAwesomeIcon icon={faFilePdf} className={styles.icon} />
            <span>cv-resume.pdf</span>
          </a>
        </div>

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
