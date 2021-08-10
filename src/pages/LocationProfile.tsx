import React from "react";
import { AssocProvidersList } from "../components/AssocProvidersList";
import { AvgRating } from "../AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./LocationProfile.module.css";

export function LocationProfile() {
  return (
    <div>
      <section>
        <h1>Title </h1>
        <AvgRating />
        <ul> specialties </ul>
        <span>
          <li> specialty</li>
        </span>
      </section>
      <section className="section is-small">
        <h1 className="title">Address data</h1>
        <h2 className="subtitle">
          <hr></hr>
          <p>Google map box with marker</p>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Providers</h1>
        <h2 className="subtitle">
          <hr></hr>
          <AssocProvidersList />
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Reviews</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ReviewsList />
        </h2>
      </section>
    </div>
  );
}
