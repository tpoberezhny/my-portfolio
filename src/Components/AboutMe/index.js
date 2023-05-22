import React from "react";
import styles from "./AboutMe.module.scss";

function AboutMe(props) {
  console.log(props.skills);
  return (
    <div className="aboutMeSection">
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit.
        </h2>
      </div>

      <div className={styles.skills}>
          {props.skills.map((item) => (
            <div className={styles.skill}>
              <img width={300} height={300} src={item.imageUrl} />
              <h2>{item.title}</h2>
              <h2 className={styles.skillDesc}>{item.description}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AboutMe;
