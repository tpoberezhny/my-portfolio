import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./Home.module.scss";

function Home() {
  const [text] = useTypewriter({
    words: ["Tim", "FrontEnd Dev"],
    loop: {},
    deleteSpeed: 80,
  });

  return (
    <div className={styles.helloSection} id="home">
      <div className="information">
        <h1>Hello,</h1>
        <h1>
          I am
          <span> {text} </span>
          <Cursor cursorColor="#7C3AED" />
        </h1>
        <h2>I am Tim and now you will be shocked with my resume :</h2>
        <button className={styles.hireMe}>
          Hire Me{" "}
          <img
            className={styles.hire}
            width={30}
            height={40}
            src="../../image/hire.svg"
            alt="Hire Me"
          />
          <img
            className={styles.hireHover}
            width={30}
            height={40}
            src="../../image/hireHover.svg"
            alt="Hire Me"
          />
        </button>
      </div>
      <img
        className={styles.homeImage}
        width={500}
        src="../../image/homeImage.png"
        alt="Main Photo"
      />
    </div>
  );
}

export default Home;
