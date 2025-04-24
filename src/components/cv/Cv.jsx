import React from 'react'
import styles from './cv.module.css'

export const Cv = () => {
return (
    <section className={styles.cvSection} id="cv">
        <h1 className={styles.title}>CV</h1>
        <div className={styles.cvContent}>
            <p className={styles.cvLink}>View my CV <a href="https://docs.google.com/document/d/1jvX4b4Haeu45HIeHLr8js6CE7Z46hWtg/edit?usp=sharing&ouid=101929757329303450074&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">here</a>.</p>
            <p className={styles.cvLink}>For more details, please check out my LinkedIn profile <a href="https://linkedin.com/in/mahnoor-faisal-36493a2ba/" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    </section>
)
}
