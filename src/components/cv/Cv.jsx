import React, { useRef, useEffect } from 'react';
import { FaDownload} from 'react-icons/fa';
import styles from './cv.module.css'

export const Cv = () => {
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
    <section className={styles.cvSection} id="cv">
        <h1 ref={titleRef} className={styles.title}>Resume</h1>
        <div className={styles.cvContent}>
            <p className={styles.cvLink}>          <a
                        href="https://docs.google.com/document/d/1EoF3uQ2ADoFM8KLTveH_Rdi29of-D_eGV4BRjfF_Of4/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadBtn}
                    >
                        Download Resume <FaDownload style={{ marginLeft: '8px' }} />
                    </a>
            </p>
        </div>
    </section>
)
}
