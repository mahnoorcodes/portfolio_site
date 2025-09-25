import React from 'react'
import styles from './experience.module.css'

const timelineData = [
    {
        title: 'Information Technology Engineer Intern',
        company: 'Panosec FZE LLC- Remote',
        date: 'September 2025 – Present',
        description: 'Redesigning and upgrading an old website using WordPress, Divi and AI tools. Collaborate with the team and complete the client\'s tasks.',
        position:'left'
    },
    {
        title: 'Web Developer',
        company: 'ICEDROP.IO - US Delivery Service Website Project - Upwork Remote',
        date: 'May 2025 – Present',
        description: 'Developed a responsive delivery service website for a U.S.-based client using WordPress and Elementor on Upwork. Managed front-end UI/UX implementation, integrated third-party RESTful APIs, and built custom interactive components using JavaScript, PHP, and CSS. Applied AI-assisted workflows with ChatGPT for code review and optimisation.',
        position:'right'
    },
    {
        title: 'Uniform Sales Assistant',
        company: 'Bukhatir Education Advancement and Management International (Beam) | American School of Creative Science, Al Layyah',
        date: 'August 2024 – September 2024',
        description: 'Streamlined sales and inventory management using Microsoft Excel. Enhanced customer experience by efficiently handling transactions and inquiries.',
        position:'left'
    }
];

export const Experience = () => {
return (
    <section className={styles.experienceSection} id="experience">
        <h1 className={styles.title}>EXPERIENCE</h1>

    <div className={styles.timeline}>
    {timelineData.map((item, index) => (
        <div className={`${styles.timelineItem} ${item.position === 'right' ? styles.timelineItemRight : styles.timelineItemLeft}`} key={index}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
                <span className={styles.timelineDate}>{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
            </div>
        </div>
    ))}
    </div>
</section>
)
}
