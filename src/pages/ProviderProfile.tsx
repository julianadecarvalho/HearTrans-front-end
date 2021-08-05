import React from "react";
import { NavBar } from "../components/NavBar";

export function ProviderProfile() {
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
        <h2> Locations </h2>
        <div> list of locations component </div>
      </section>
      <section>
        <h2> Languages </h2>
        <ul>
          <li> English </li>
          <li> Spanish </li>
        </ul>
      </section>
      <section>
        <h2> Reviews </h2>
        <div> list of reviews component </div>
      </section>
    </div>
  );
}
