import React from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
    return (
        <section className={styles.contactSection} id="contact">
            <h1 className={styles.title}>CONTACT ME</h1>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:mahnoor.faisal.h@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                        mahnoor.faisal.h@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://linkedin.com/in/mahnoor-faisal-36493a2ba/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        linkedin.com/in/mahnoor-faisal
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/mahnoorcodes" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                        github.com/mahnoorcodes
                    </a>
                </li>
            </ul>
        </section>
    );
}

