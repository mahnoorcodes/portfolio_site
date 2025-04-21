import React from 'react'
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSmile} from '@fortawesome/free-solid-svg-icons';

export const About = () => {
    return (
    <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutTitle}>
            <h1 className={styles.title}>ABOUT ME</h1>
        </div>
        <div className={styles.aboutContent}>
            <p>
            Hi, I’m Mahnoor, a recent IT graduate with a passion for frontend web and app development!<br/> 
            I enjoy being creative and I love designing, coding and gaming. I spent most of my childhood drawing and painting, so I'm pretty good at digital illustrations!<br/> 
            I am currently exploring opportunities to work on innovative projects that combine design and technology to solve real-world problems.<br/>
            Let’s build something cool! <FontAwesomeIcon icon={faSmile} className={styles.smileIcon} />
            </p>
        </div>
    </section>
    )
}
