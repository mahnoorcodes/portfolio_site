import React, {useState} from 'react'
import styles from './navbar.module.css';
// import '../../index.css';
import { getImageUrl } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <a href="/" className={styles.navbarLink}>MAHNOOR FAISAL</a>
                <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick= {toggleMenu} alt="menu" />
            </div>

            <div className={`${styles.navbarLinks} ${menuOpen ? styles.show : ''}`}>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#skills">SKILLS</a>
                <a href="#cv">CV</a>
                <a href="#contact">CONTACT ME</a>
            </div>
        </nav>
    );
};
