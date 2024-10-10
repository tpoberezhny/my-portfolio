import React from "react";
import styles from "./AboutMe.module.scss";

function AboutMe({ skills }) {
  return (
    <div className="aboutMeSection" id="aboutMe">
      <img
        className={styles.laptopImg}
        src="image/laptop.png"
        alt="Laptop Image"
      />
      <div className={styles.title}>
        <h1>
          About <span>Me</span>
        </h1>
        <h2 className="desription">
          Hello! My name is Tim, and I'm a Full-Stack Developer | UI-UX Designer with a passion
          for crafting modern, efficient, and visually appealing user
          interfaces. I strive for continuous improvement and keep up with the
          latest technological trends. Additionally, I possess strong skills in
          UI/UX design and have knowledge of back end development, rounding out
          my capabilities for comprehensive web development projects.
        </h2>
      </div>

      <div className={styles.skills}>
        {skills.map((item, index) => (
          <div key={index} className={styles.skill}>
            <img
              width={300}
              height={300}
              src={item.imageUrl}
              alt="Image of JS/REACT/REDUX"
            />
            <h2>{item.title}</h2>
            <h2 className={styles.skillDesc}>{item.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
