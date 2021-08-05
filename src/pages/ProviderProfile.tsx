import React from "react";
import { AssocLocationsList } from "../components/AssocLocationsList";
import { AvgRating } from "../components/AvgRating";
import { NavBar } from "../components/NavBar";
import { ReviewsList } from "../components/ReviewsList";

export function ProviderProfile() {
  return (
    <div>
      <NavBar />
      <section>
        <h1>Title </h1>
        <AvgRating />
        <ul> specialties </ul>
        <span>
          <li> specialty</li>
        </span>
      </section>
      <section>
        <h2> Locations </h2>
        <AssocLocationsList />
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
        <ReviewsList />
      </section>
    </div>
  );
}
