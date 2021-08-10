import React from "react";
import { AssocProvidersList } from "../components/AssocProvidersList";
import { AvgRating } from "../components/AvgRating";
import { NavBar } from "../components/NavBar";
import { ReviewsList } from "../components/ReviewsList";

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
      <section>
        <p> Address data </p>
        <div> Google maps box </div>
      </section>
      <section>
        <h2> Providers </h2>
        <AssocProvidersList />
      </section>
      <section>
        <h2> Reviews </h2>
        <ReviewsList />
      </section>
    </div>
  );
}
