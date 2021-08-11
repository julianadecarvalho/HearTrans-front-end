import React from "react";
import styles from "./Home.module.css"

export function Home() {
  return (
    <div>
      <section>
        <h1>About Us</h1>
        <p>Hi!!</p>
        <p>Welcome to our website! We are programming students at The Ada Developers Academy and this is our capstone project.</p>
      </section>
      <section>
        <h1>Mission</h1>
        <p>Our mission is to help transgender people find medical providers and locations that will help them. We wanted to make sure that people can leave reviews so that in case those locations and providers actually respect people's preferences then other transgender people will know they can go to them.</p>
      </section>
      <section>
        <h1>Important!</h1>
        <p>We don't collect user data so there is no issues about it being leaked.</p>
      </section>
    </div>
  );
}
