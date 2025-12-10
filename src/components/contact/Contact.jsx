import React, { useRef, useEffect } from 'react';
import styles from './contact.module.css'
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

export const Contact = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const el = titleRef.current;

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            el.classList.add(styles.visible);
            observer.unobserve(el); 
            }
        });
        }, { threshold: 0.2 });

        observer.observe(el);
    }, []);

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactRow}>
                <h1 ref={titleRef} className={styles.title}>Let's Get In Touch</h1>
                <div className={styles.socialIcons}>
                <a
                    href="https://www.linkedin.com/in/mahnoor-faisal-36493a2ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/mahnoorcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.upwork.com/freelancers/~0123c8d2af1fb979c6?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Upwork"
                    className={styles.upworkText}
                >
                    Upwork
                </a>

                <a
                    href="mailto:mahnoor.faisal.h@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
                </div>
            </div>
        </section>

    );
}

