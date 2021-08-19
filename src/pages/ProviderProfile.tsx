import React, { useEffect, useState } from "react";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./ProviderProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProviderResponse from "../models/provider-response";
import { AddProviderReviewForm } from "../components/AddProviderReview";
import ReviewResponse from "../models/review-response";

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
  const [provider, setProvider] = useState<ProviderResponse>(emptyProvider);
  const [reviewList, setReviewList] = useState<ReviewResponse[]>([]);

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/providers/${id}`)
      .then(async (response) => {
        const data: ProviderResponse = await response.data.providerDict;
        setProvider(data);
        setReviewList(data.reviews);
      })
      .catch((error) => {
        console.log("Error:", error);
        console.log(provider);
        alert("ooopsie Daisy, couldn't get your provider information!! 😖 ");
      });
  }, [provider]);

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

  // post Review
  const postReview = (input: any) => {
    // event.preventDefault();
    axios
      .post(`${REACT_APP_BACKEND_URL}/provider/reviews/${id}`, input)
      .then(async (response) => {
        console.log(response);
        const reviews = [...reviewList];
        reviews.push(response.data);
        setReviewList(reviews);
        // alert("Provider Review successfully added. Thank you for your input!");
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Did you fill out the form completely");
      });
    // window.location.reload(false);
  };

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-flexible">
          <section className="section is-small">
            {/* <div className="box"> */}
            <h1 className="title">
              {provider.fullName}, {provider.titles.join(", ")}
            </h1>
            <hr></hr>
            <h2 className="subtitle">
              <strong> Pronouns: </strong> ({provider.pronouns})<br></br>
              <strong> Other Names: </strong> {provider.otherNames.join()}
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
              <strong> Languages: </strong>{" "}
              <ul>
                {provider.languages.map((language) => {
                  return <li>{language}</li>;
                })}
              </ul>
            </h2>
            <h2 className="subtitle">
              <strong> Services: </strong>{" "}
              <ul>
                {provider.services.map((service) => {
                  return <li>{service}</li>;
                })}
              </ul>
            </h2>
            {/* <h2 className="subtitle"> */}
            <h2 className="subtitle">
              <strong> Remote Visits: </strong>{" "}
              {provider.remoteVisits === true ? "Yes" : "No"}
            </h2>
            <h2 className="subtitle">
              <strong> Sliding Scale Pay: </strong>{" "}
              {provider.slidingScalePay === true ? "Yes" : "No"}{" "}
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
            {/* </div> */}
          </section>
        </div>

        <div className="column is-half">
          <section className="section">
            {/* <section className="section is-small"> */}
            <div className="box">
              <h1 className="title">Write a Review</h1>
              <hr></hr>
              <AddProviderReviewForm postReview={postReview} />
            </div>
          </section>
        </div>
      </div>
      <div className="column is-flexible">
        <h1 className="title">Reviews</h1>
        <hr></hr>
        {provider.reviews.length ? (
          ""
        ) : (
          <h3 className="subtitle">
            This provider has no reviews yet. Be the first to review! 📝{" "}
          </h3>
        )}
        <h2 className="subtitle">
          <ReviewsList reviews={provider.reviews} />
        </h2>
      </div>

      <footer>
        <button
          className="button is-small is-danger is-light"
          onClick={deleteProvider}
        >
          Delete this provider
        </button>
      </footer>
    </div>
  );
}
