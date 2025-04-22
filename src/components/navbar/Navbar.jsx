import React, {useState , useEffect} from 'react'
import styles from './navbar.module.css';
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
                <a href="/" className={styles.navbarTitle}>MAHNOOR FAISAL</a>
                <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick= {toggleMenu} alt="menu" />
            </div>

            <ul className={`${styles.navbarMenu} ${menuOpen ? styles.show : ''}`}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#cv">CV</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>
            </ul>
        </nav>
    );
};
