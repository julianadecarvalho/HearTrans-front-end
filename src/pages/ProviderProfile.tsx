import React, { useEffect, useState } from "react";
import { AssocLocationsList } from "../components/AssocLocationsList";
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
  const emptyProviderPromise: Promise<ProviderResponse> = new Promise(function(resolve, reject) {
    resolve(emptyProvider);});
  const { id } = useParams<{ id: string }>();
  // api call here to get provider by id data
  // axios.get('link'). then
  // put everything in useEffect
  //maybe if statement to see if it's defined
  const [provider, setProvider] = useState<ProviderResponse>(emptyProvider);

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
  return (
    <body>
      <section className="section is-small">
        <h1 className="title">{provider.fullName}</h1>
        <h2 className="subtitle">
          My other names Pronouns here
          <hr></hr>
          {/* rating number will come from fresh api call data, pass it in as props*/}
          <AvgRating rating={provider.avgRating} len={provider.reviews.length} />
          <span className="tag">{provider.specialties}</span>{" "}
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
