import React, { useEffect, useState } from "react";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./ProviderProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProviderResponse from "../models/provider-response";
const BACKEND_URL = "http://heartrans-back.herokuapp.com";

export function ProviderProfile() {
  const emptyProvider: ProviderResponse = {
    id: 0,
    fullName: "",
    pronouns: "",
    otherNames: [],
    titles: [],
    specialties: [],
    languages: [],
    services: [],
    avgRating: "",
    locations: [],
    reviews: [],
  };
  const emptyProviderPromise: Promise<ProviderResponse> = new Promise(function (
    resolve,
    reject
  ) {
    resolve(emptyProvider);
  });
  const { id } = useParams<{ id: string }>();
  // api call here to get provider by id data
  // axios.get('link'). then
  // put everything in useEffect
  //maybe if statement to see if it's defined
  const [provider, setProvider] = useState<ProviderResponse>(emptyProvider);

<<<<<<< HEAD
  useEffect(() => {axios
        .get(`${BACKEND_URL}/providers/${id}`)
        .then(async (response) => {
          const data: ProviderResponse = await response.data.providerDict;
          setProvider(data);
        })
        .catch((error) => {
          console.log("Error:", error);
          console.log(provider);
          alert("ooopsie Daisy, couldn't get your provider information!! 😖 ");
        });},
        []
      );
=======
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/providers/${id}`)
      .then(async (response) => {
        const data: ProviderResponse = await response.data.providerDict;
        setProvider(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log(provider);
        alert("ooopsie Daisy, couldn't get your provider information!! 😖 ");
      });
  });
>>>>>>> 30387dc46e5cdd4af7ed70207ecaf7fa4ce85d7f
  return (
    <body>
      <section className="section is-small">
        <h1 className="title">
          {provider.fullName}, {provider.titles.join()}
        </h1>
        <hr></hr>
        <h2 className="subtitle">
          Pronouns: ({provider.pronouns})<br></br>
          Other Names: {provider.otherNames.join()}
        </h2>
        <h2>
          <AvgRating
            rating={provider.avgRating}
            len={provider.reviews.length}
          />
          <div className="tags is-grouped-multiline">
            {provider.specialties.map((speciality) => {
              return (
                <span
                  className={`tag is-medium is-rounded ${styles["speciality-tag"]}`}
                >
                  {speciality}
                </span>
              );
            })}
          </div>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Locations</h1>
        <h2 className="subtitle">
          <hr></hr>
          <div>
            {provider.locations.map((location) => {
              return (
                <Link to={`/location/${location.id}`}>
                  {location.locationName}
                </Link>
              );
            })}
          </div>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Languages</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ul>
            {provider.languages.map((language) => {
              return <li>{language}</li>;
            })}
          </ul>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Services</h1>
        <h2 className="subtitle">
          <hr></hr>
          <ul>
            {provider.services.map((service) => {
              return <li>{service}</li>;
            })}
          </ul>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Visits</h1>
        <h2 className="subtitle">
          <hr></hr>
          {/* color={ratingValue <= parseInt(rating) ? "#ffc107" : "#e4e5e9"} */}
          <ul>
            <li>
              {" "}
              Remote Visits: {provider.remoteVisits === true ? "Yes" : "No"}
            </li>
            <li>
              {" "}
              Sliding Scale Pay:{" "}
              {provider.slidingScalePay === true ? "Yes" : "No"}{" "}
            </li>
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
          <ReviewsList reviews={provider.reviews} />
        </h2>
      </section>
    </body>
  );
}
