import React from "react";
import styles from "./AboutMe.module.scss";

function AboutMe(props) {
  return (
    <div className="aboutMeSection" id="aboutMe">
        <img
          className={styles.laptopImg}
          src="../../image/laptop.png"
          alt="Laptop Image"
        />
      <div className={styles.title}>
        <h1>
          About <span>Me</span>
        </h1>
        <h2 className="desription">
          Hello! My name is Tim, and I'm a Front End developer. I am
          passionately dedicated to creating modern, efficient, and visually
          appealing user interfaces. In my work, I strive for continuous
          improvement and staying up-to-date with the latest technological
          trends.
        </h2>
      </div>

      <div className={styles.skills}>
        {props.skills.map((item) => (
          <div className={styles.skill}>
            <img width={300} height={300} src={item.imageUrl}  alt="Image of JS/REACT/REDUX"/>
            <h2>{item.title}</h2>
            <h2 className={styles.skillDesc}>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
