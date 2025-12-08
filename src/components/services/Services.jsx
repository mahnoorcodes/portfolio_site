import React, { useRef, useEffect } from 'react';
import styles from './services.module.css';

export const Services = () => {
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
            <section id="services" className={styles.servicesSection}>
                <h1 ref={titleRef} className={styles.servicesTitle}>How I Can Help You</h1>
                <div className={styles.servicesContent}>                   
                    <div className={styles.serviceBox}>
                        <h3>Frontend Development</h3>
                        <p>Modern, fast, and responsive user interfaces using React, Vite, and CSS.</p>
                    </div>

                    <div className={styles.serviceBox}>
                        <h3>UI / UX Design</h3>
                        <p>Clean, minimal layouts focused on usability and visual hierarchy.</p>
                    </div>

                    <div className={styles.serviceBox}>
                        <h3>WordPress Development</h3>
                        <p>Custom themes, Elementor & Divi builds, and high-performance websites.</p>
                    </div>
                </div>
            </section>
    );
};

export default Services;