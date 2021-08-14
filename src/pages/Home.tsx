import React from "react";
import styles from "./Home.module.css"

export function Home() {
  return (
    <div>
      <section className={styles["section"]}>
        <h1 className="title">Mission</h1>
        <p className={styles["text"]}>Our mission is to help transgender people find medical providers 
        and locations. We wanted to make sure that people can leave reviews so that others will know 
        if they can go to that place. </p>
      </section>
      <section className={styles["section"]}>
        <h1 className="title">The HearTrans Web Application</h1>
        <p className={styles["text"]}>On this web application you can search for locations and medical 
        providers near you! Once you have completed your search you can click on a result you will be able see the location 
        or provider's profile. You can even leave a review to help others know whether or not they can trust
        that place or person. If you know of a location or provider that did not appear in the results you can 
        add them to our database!</p>
      </section>
      <section className={styles["section"]}>
        <h1 className="title">About Us</h1>
        <p className={styles["text"]}>Hi!!</p>
        <p className={styles["text"]}>Welcome to our website! We are programming students at 
        The Ada Developers Academy and this is our capstone project. Please be gentle with our creation, 
        but also have fun exploring it.</p>
      </section>
      <section className={styles["section"]}>
        <h1 className="title">Important!</h1>
        <p className={styles["text"]}>We don't collect user data so there is no issues about it being leaked.</p>
      </section>
    </div>
  );
}
