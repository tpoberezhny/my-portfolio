import React from 'react'
import styles from './ContactMe.module.scss'

function ContactMe() {
  return (
    <div className={styles.contactMeSection} id='contactMe'>
      <div className={styles.title}>
        <h1>Contact <span>Me</span></h1>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.contactImg}>
          <img width={650} height={600} src='../../image/contactMe.png' alt='Meditation Boy'></img>
        </div>
        <div className={styles.contactInput}>
          <form>
            <input type='text' placeholder='Your name'></input>
          </form>
          <form >
            <input type='email' placeholder='Your email'></input>
          </form>
          <form className={styles.message} >
            <input type='text' placeholder='Message'></input>
          </form>
          <button className={styles.submitBtn} >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;