import React from "react";
import { AssocLocationsList } from "../components/AssocLocationsList";
import { AvgRating } from "../AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./ProviderProfile.module.css";
import { Link } from "react-router-dom";

export function ProviderProfile() {
  return (
    <body>
      <section className="section is-small">
        <h1 className="title">FullName, MD,NP,PA-C</h1>
        <h2 className="subtitle">
          My other names
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
          {/* or could just map out list here */}
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
        <h1 className="title">Services</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ul>
            <li> X-Ray </li>
            <li> Infusions </li>
          </ul>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Visits</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ul>
            <li> Remote Visits: Yes </li>
            <li> Sliding Scale Pay: Yes </li>
          </ul>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Reviews</h1>
        <h2 className="subtitle">
          <hr></hr>
          <Link to="/addproviderreview/:id">
            <button className="button is-medium">Add Review</button>
          </Link>
          <ReviewsList />
        </h2>
      </section>
    </body>
  );
}
