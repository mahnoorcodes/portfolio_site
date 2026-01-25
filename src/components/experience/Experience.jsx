import React, { useRef, useEffect } from 'react';
import styles from './experience.module.css'

const timelineData = [
    {
        title: 'Information Technology Engineer Intern',
        company: 'Panosec FZE LLC- Remote',
        date: '2025 – Present',
        description: '• Redesigned and optimised a large-scale WordPress corporate website comprising 200+ pages and posts using Divi, creating custom global presets to standardise design, improve maintainability, and enhance UI/UX, accessibility, and site performance. \n • Developed and maintained a React + TypeScript web application for automated CV parsing, enabling structured extraction of candidate data for recruitment workflows. \n • Implemented secure Google OAuth authentication for user sign-up and login, improving user experience and application security. \n • Refactored and maintained front-end code within a Docker-based development environment, improving scalability, maintainability, and deployment consistency. \n • Collaborated with cross-functional team members (designers, stakeholders, and developers) to deliver client requirements on schedule and to specification. \n • Utilised AI-assisted development tools for code review, debugging, and optimisation, increasing development efficiency and code quality.',
        position:'left'
    },
    {
        title: 'Web Developer',
        company: 'ICEDROP.IO & ICERIDE.IO - US Delivery Service Website Project - Upwork Remote',
        date: '2025 – Present',
        description: '• Developed a fully responsive production website using WordPress and Elementor for a U.S.-based client. \n • Implemented modern UI/UX layouts with a mobile-first approach across devices. \n • Integrated RESTful APIs to support dynamic content and app-related features. \n • Built custom components using JavaScript, PHP, and CSS to extend platform functionality.',
        position:'right'
    },
    {
        title: 'Uniform Sales Assistant',
        company: 'Bukhatir Education Advancement and Management International | American School of Creative Science, Al Layyah',
        date: 'Aug - Sept 2024',
        description: '• Managed customer interactions and transactions in a fast-paced environment. \n • Used Microsoft Excel for inventory tracking and reporting. \n • Developed strong communication, organisation, and problem-solving skills.',
        position:'left'
    }
];

export const Experience = () => {
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
<section className={styles.experienceSection} id="experience">
    <h1 ref={titleRef} className={styles.title}>EXPERIENCE</h1>

    <div className={styles.timelineWrapper}>
        
        {/* Vertical line */}
        <div className={styles.timelineLine}></div>

        {timelineData.map((item, index) => (
            <div className={styles.timelineRow} key={index}>
                {/* LEFT COLUMN: DATE */}
                <div className={styles.timelineDateCol}>
                    <span className={styles.timelineDate}>{item.date}</span>
                </div>

                {/* CENTER COLUMN: DOT */}
                <div className={styles.timelineDotCol}>
                    <div className={styles.timelineDot}></div>
                </div>

                {/* RIGHT COLUMN: CONTENT */}
                <div className={styles.timelineContentCol}>
                    <div className={styles.timelineContent}>
                        <h3>{item.title}</h3>
                        <h4>{item.company}</h4>
                        <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
                    </div>
                </div>
            </div>
        ))}

    </div>
</section>

)
}
