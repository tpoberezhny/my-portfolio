import React from "react";
import styles from "./ContactMe.module.scss";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function ContactMe() {
  return (
    <div className={styles.contactMeSection} id="contactMe">
      <div className={styles.title}>
        <h1>
          Contact <span>Me</span>
        </h1>
      </div>
      <div className={styles.contactForm}>
        <motion.div
          variants={fadeIn("right", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={styles.contactImg}
        >
          <img
            width={650}
            height={600}
            src="../../image/contactMe.png"
            alt="Meditation Boy"
          ></img>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={styles.contactInput}
        >
          <form>
            <input type="text" placeholder="Your name"></input>
          </form>
          <form>
            <input type="email" placeholder="Your email"></input>
          </form>
          <form className={styles.message}>
            <input type="text" placeholder="Message"></input>
          </form>
          <button className={styles.submitBtn}>Submit</button>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactMe;
