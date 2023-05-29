import React from "react";
import styles from "./ContactMe.module.scss";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Axios from "axios";

function ContactMe() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    Axios.post("https://646aa2107d3c1cae4ce2b010.mockapi.io/message", {
      name: data.firstName,
      email: data.email,
      message: data.message,
    });
    reset();
  };

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
          <form
            className={styles.contactInput}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("firstName", {
                required: "The field is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 words.",
                },
              })}
              type="text"
              placeholder="Your name"
            ></input>
            <div>
              {errors?.firstName && (
                <p>{errors.firstName?.message || "Error!"}</p>
              )}
            </div>
            <input
              {...register("email", {
                required: "The field is required",
                pattern: /[A-Za-z]{4}/,
              })}
              type="email"
              placeholder="Your email"
            ></input>
            <div>{errors?.email && <p>Wrong e-mail</p>}</div>
            <input
              {...register("message")}
              className={styles.messageInput}
              type="text"
              placeholder="Message"
            ></input>

            <input className={styles.submitBtn} type="submit" />
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactMe;
