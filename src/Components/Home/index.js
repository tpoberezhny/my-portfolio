import React from "react";
import styles from "./Home.module.scss";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

function Home() {
  const [text] = useTypewriter({
    words: ["Full-Stack Dev", "FrontEnd Dev", "UI/UX Designer"],
    loop: {},
    deleteSpeed: 80,
  });

  return (
    <div className={styles.helloSection} id="home">
      <div className={styles.information}>
        <h1>Hello,</h1>
        <h1>
          I am a<span> {text} </span>
          <Cursor cursorColor="#7C3AED" />
        </h1>
        <h2>
          Hey, my new website-portfolio with NextJS are ready, check it out:
          <br/>
          <span style={{color: "black"}}>I would love to hear some feedback from you.</span>
        </h2>
        <a
          href="https://tpoberezhny.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.newWeb}
        >
          https://tpoberezhny.com
        </a>
        <Link to="contactMe" spy={true} smooth={true} duration={1000}>
          <button className={styles.hireMe}>
            Hire Me{" "}
            <img
              className={styles.hire}
              width={30}
              height={40}
              src="image/hire.svg"
              alt="Hire Me"
            />
            <img
              className={styles.hireHover}
              width={30}
              height={40}
              src="image/hireHover.svg"
              alt="Hire Me"
            />
          </button>
        </Link>
      </div>
      <div>
        <img
          className={styles.homeImage}
          width={500}
          src="image/homeImage.png"
          alt="Boy with laptop smiling"
        />
        <img
          className={styles.mobileHomeImage}
          src="image/homeMobileImage.png"
          alt="Mobile version of me"
        />
      </div>
    </div>
  );
}

export default Home;
