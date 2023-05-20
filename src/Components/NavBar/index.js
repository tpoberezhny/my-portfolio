import React, { useState } from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className={styles.headerLeft}>
        <img width={80} height={80} src="../../image/logo.svg" alt="Logo" />
      </div>
      <div className={styles.headerRight}>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
      <div className={styles.burger}>
        {!toggle ? (
          <img
            onClick={() => setToggle(true)}
            width={30}
            height={30}
            src="../../image/menu-btn.svg"
            alt="Menu Button"
          />
        ) : (
          <img className="close-btn"
            onClick={() => setToggle(false)}
            width={20}
            height={20}
            src="../../image/close-btn.svg"
            alt="Close Button"
          />
        )}
        {toggle ? (
          <ul className={styles.menu}>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}

export default NavBar;
