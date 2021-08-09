import React from "react";
import { AssocLocationsList } from "../components/AssocLocationsList";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./ProviderProfile.module.css";

export function ProviderProfile() {
  return (
    <body>
      <section className="section is-small">
        <h1 className="title">Title</h1>
        <h2 className="subtitle">
          <hr></hr>
          <AvgRating />
          <span className="tag">some speciality</span>{" "}
          <span className="tag">some speciality</span>{" "}
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Locations</h1>
        <h2 className="subtitle">
          <hr></hr>
          <AssocLocationsList />
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Languages</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ul>
            <li> English </li>
            <li> Spanish </li>
          </ul>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Reviews</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ReviewsList />
        </h2>
      </section>
    </body>
  );
}
