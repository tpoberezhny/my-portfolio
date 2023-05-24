import React from "react";
import styles from "./Home.module.scss";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Home() {
  const [text] = useTypewriter({
    words: ["Tim", "FrontEnd Dev"],
    loop: {},
    deleteSpeed: 80,
  });

  return (
    <div className={styles.helloSection} id="home">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className={styles.information}
      >
        <h1>Hello,</h1>
        <h1>
          I am
          <span> {text} </span>
          <Cursor cursorColor="#7C3AED" />
        </h1>
        <h2>I am Tim and now you will be shocked with my resume :</h2>
        <Link to="contactMe" spy={true} smooth={true} duration={1000}>
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
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img
          className={styles.homeImage}
          width={500}
          src="../../image/homeImage.png"
          alt="Main Photo"
        />
      </motion.div>
    </div>
  );
}

export default Home;
