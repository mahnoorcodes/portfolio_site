import React, { useRef, useEffect } from 'react';
import styles from './about.module.css';

export const About = () => {
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
            <section id="about" className={styles.aboutSection}>
                <h1 ref={titleRef} className={styles.aboutTitle}>ABOUT ME</h1>
                <div className={styles.aboutContent}>                   
                    <div className={styles.row}>
                        <span className={styles.rowIcon}>⭐</span>
                        <p>
                            I’m a frontend web developer and IT engineer intern with a passion for modern, responsive web experiences.
                        </p>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.rowIcon}>🚀</span>
                        <p>
                            As a freelancer, I’ve worked on real-world web projects creating functional and visually engaging solutions.
                            My internship enhanced my skills in web development, troubleshooting, and scalable systems.
                        </p>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.rowIcon}>🎨</span>
                        <p>
                            I love combining design and technology to build sleek interfaces and digital art, inspired by gaming and creative problem-solving. 
                        </p>
                    </div>
                </div>
            </section>
    );
};
export default About;