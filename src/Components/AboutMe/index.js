import React from "react";
import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <div className="aboutMeSection">
      <img className={styles.laptopImg} src="../../image/laptop.png" alt="Laptop Image"/>
      <div className={styles.title}>
        <h1>
          About <span>Me</span>
        </h1>
        <h2 className="desription">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit.
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;
