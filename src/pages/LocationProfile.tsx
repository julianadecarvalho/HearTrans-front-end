import React from "react";
import { NavBar } from "../components/NavBar";

export function LocationProfile() {
  return (
    <div>
      <NavBar />
      <section>
        <h1>Title </h1>
        <p> avg reviews component </p>
        <ul> specialties </ul>
        <span>
          <li> specialty</li>
        </span>
      </section>
      <section>
        <p> Address data </p>
        <div> Google maps box </div>
      </section>
      <section>
        <h2> Providers </h2>
        <div> list of providers associated component </div>
      </section>
      <section>
        <h2> Reviews </h2>
        <div> list of reviews component </div>
      </section>
    </div>
  );
}
