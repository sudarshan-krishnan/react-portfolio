import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.brandLogo} href="/">Portfolio</a>
      <div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a> {/* Corrected href from "#about" to "#contact" */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
