import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-scroll";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={60} height={55} src="image/logo.svg" alt="Logo" />
      </div>
      <div className={styles.headerRight}>
        <ul className={styles.menu}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={400}
          >
            <li>Home</li>
          </Link>
          <Link activeClass="active" to="aboutMe" spy={true} smooth={true}>
            <li>About Me</li>
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
            <li>Projects</li>
          </Link>
          <Link activeClass="active" to="contactMe" spy={true} smooth={true}>
            <li>Contact Me</li>
          </Link>
        </ul>
      </div>
      <div className={styles.burger}>
        {!toggle ? (
          <img
            onClick={() => setToggle(true)}
            width={30}
            height={30}
            src="image/menu-btn.svg"
            alt="Menu Button"
          />
        ) : (
          <img
            className="close-btn"
            onClick={() => setToggle(false)}
            width={20}
            height={20}
            src="image/close-btn.svg"
            alt="Close Button"
          />
        )}
        {toggle ? (
          <ul className={styles.menu}>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <li>Home</li>
            </Link>
            <Link activeClass="active" to="aboutMe" spy={true} smooth={true}>
              <li>About Me</li>
            </Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true}>
              <li>Projects</li>
            </Link>
            <Link activeClass="active" to="contactMe" spy={true} smooth={true}>
              <li>Contact Me</li>
            </Link>
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
