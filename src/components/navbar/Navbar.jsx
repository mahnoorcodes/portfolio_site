import React, {useState } from 'react'
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ({ onScrollTo, refs }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleNavClick = (scrollToRef) => {
        onScrollTo(scrollToRef); 
        setMenuOpen(false); 
    };

    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <li className={styles.navbarTitle} onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });window.history.pushState("", document.title, window.location.pathname);}}>
                    MAHNOOR FAISAL
                </li>
            </div>
                <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick= {toggleMenu} alt="menu" />

            <ul className={`${styles.navbarMenu} ${menuOpen ? styles.show : ''}`}>
                <li onClick={() => handleNavClick(refs.aboutRef)}>About</li>
                <li onClick={() => handleNavClick(refs.skillsRef)}>Skills</li>
                <li onClick={() => handleNavClick(refs.experienceRef)}>Experience</li>
                <li onClick={() => handleNavClick(refs.projectsRef)}>Projects</li>
                <li onClick={() => handleNavClick(refs.cvRef)}>Resume</li>
                <li onClick={() => handleNavClick(refs.contactRef)}>Contact Me</li>
            </ul>
        </nav>
    );
};
