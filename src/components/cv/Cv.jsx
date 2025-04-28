import React from 'react'
import styles from './cv.module.css'

export const Cv = () => {
return (
    <section className={styles.cvSection} id="cv">
        <h1 className={styles.title}>Resume</h1>
        <div className={styles.cvContent}>
            <p className={styles.cvLink}>View my Resume <a href="https://docs.google.com/document/d/1EoF3uQ2ADoFM8KLTveH_Rdi29of-D_eGV4BRjfF_Of4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.</p>
            <p className={styles.cvLink}>For more details, please check out my LinkedIn profile <a href="https://linkedin.com/in/mahnoor-faisal-36493a2ba/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    </section>
)
}
