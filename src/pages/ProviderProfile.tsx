import React, { useEffect, useState } from "react";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./ProviderProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProviderResponse from "../models/provider-response";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
  const { id } = useParams<{ id: string }>();
  // api call here to get provider by id data
  // axios.get('link'). then
  // put everything in useEffect
  //maybe if statement to see if it's defined
  const [provider, setProvider] = useState<ProviderResponse>(emptyProvider);

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/providers/${id}`)
      .then(async (response) => {
        const data: ProviderResponse = await response.data.providerDict;
        setProvider(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log(provider);
        alert("ooopsie Daisy, couldn't get your provider information!! 😖 ");
      });
  }, []);

  // delete this provider
  const deleteProvider = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/providers/${id}`)
      .then((response) => {
        alert(
          `Successfully deleted the provider: ${provider.fullName} id:${provider.id}`
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("LOLOL Couldn't Delete the Provider, something went wrong!! 😖");
      });
  };

  return (
    <div className="columns">
      <div className="column is-4 is-two-fifths is-offset-1">
        <section className="section is-small">
          <div className="box">
            <h1 className="title">
              {provider.fullName}, {provider.titles.join(", ")}
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
            <br></br>
            <h1 className="title">Overview</h1>
            <hr></hr>
            <h2 className="subtitle">
              Languages:
              <ul>
                {provider.languages.map((language) => {
                  return <li>{language}</li>;
                })}
              </ul>
            </h2>
            <h2 className="subtitle">
              Services:
              <ul>
                {provider.services.map((service) => {
                  return <li>{service}</li>;
                })}
              </ul>
            </h2>
            <h2 className="subtitle">
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
            <br></br>
            <h1 className="title">Locations</h1>
            <hr></hr>
            <h2 className="subtitle">
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
            <Link to={`/addlocationtoprovider/${id}`}>
              <button className="button is-medium is-primary is-light">
                Add Location
              </button>
            </Link>
          </div>
        </section>

        <footer className={styles["deletebutton-padding"]}>
          <button
            className="button is-small is-danger is-light"
            onClick={deleteProvider}
          >
            Delete this provider
          </button>
        </footer>
      </div>
      <div className="column is-half">
        <section className="section is-small">
          <h1 className="title">Reviews</h1>
          <br></br>
          {provider.reviews.length ? (
            ""
          ) : (
            <h3 className="subtitle">
              This provider has no reviews yet. Be the first to review! 📝{" "}
            </h3>
          )}
          <h2 className="subtitle">
            <ReviewsList reviews={provider.reviews} />
            <Link to={`/addproviderreview/${id}`}>
              <button className="button is-medium is-primary is-light">
                Add Review
              </button>
            </Link>
          </h2>
        </section>
      </div>
    </div>
  );
}
