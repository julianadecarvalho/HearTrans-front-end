import React from "react";
import { AssocProvidersList } from "../components/AssocProvidersList";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./LocationProfile.module.css";
import { Link } from "react-router-dom";

export function LocationProfile() {
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
          {/* or could just map out list here */}
          <AssocProvidersList />
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Reviews</h1>
        <h2 className="subtitle">
          <hr></hr>
          <Link to="/addlocationreview/:id">
            <button className="button is-medium">Add Review</button>
          </Link>
          <ReviewsList />
        </h2>
      </section>
    </body>
  );
}
