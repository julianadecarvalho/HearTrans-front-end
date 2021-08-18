import React, { useEffect, useState } from "react";
import styles from "./LocationProfile.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LocationResponse from "../models/location-response";
import SimpleMap from "../components/Map";

require("dotenv").config();
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export function LocationProfile() {
  const emptyLocation: LocationResponse = {
    id: 0,
    locationName: "",
    locationTypes: [],
    googleMapsUrl: "",
    locationUrl: "",
    latitude: "",
    longitude: "",
    phone: "",
    address: "",
    googlePlaceId: "",
    providers: [],
    locationPoint: {
      type: "Point",
      coordinates: [0, 0],
    },
  };

  const { id } = useParams<{ id: string }>();

  const [location, setLocation] = useState<LocationResponse>(emptyLocation);

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/locations/${id}`)
      .then(async (response) => {
        const data: LocationResponse = await response.data.locationResponse;
        setLocation(data);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("No provider in that location, try again!");
      });
  }, []);

  // delete this provider
  const deleteLocation = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/locations/${id}`)
      .then((response) => {
        alert(
          `Successfully deleted the location:${location.locationName} id:${location.id}`
        );
      })
      .catch((error) => {
        console.log("Error: ", error);
        alert("LOLOL Couldn't Delete the Location, something went wrong!! 😖");
      });
  };

  console.log(location.latitude, location.longitude);
  console.log(location);
  return (
    <div className="columns">
      <div className="column is-half">
        <section className="section is-small">
          <h1 className="title">{location.locationName}</h1>
          <hr></hr>

          <h2 className="subtitle">
            <a href={location.googleMapsUrl}>{location.address}</a>
          </h2>
          <h2 className="subtitle">{location.phone}</h2>
        </section>

        <section className="section is-small">
          <h1 className="title">Providers at this location</h1>
          <hr></hr>
          <h2 className="subtitle">
            <div>
              {location.providers.map((provider) => {
                return (
                  <Link to={`/provider/${provider.id}`}>
                    {provider.fullName}, {provider.titles}, ({provider.pronouns}
                    )
                  </Link>
                );
              })}
            </div>
          </h2>
          <Link to={`/addprovidertolocation/${id}`}>
            <button className="button is-medium is-primary is-light">
              Add Provider
            </button>
          </Link>
        </section>
        <footer className={styles["deletebutton-padding"]}>
          <button
            className="button is-small is-danger is-light"
            onClick={deleteLocation}
          >
            Delete this location
          </button>
        </footer>
      </div>
      <div className={`column ${styles["gmap"]}`}>
        {location !== emptyLocation && (
          <SimpleMap
            location={{
              lat: parseFloat(location.latitude),
              lng: parseFloat(location.longitude),
            }}
          />
        )}
      </div>
    </div>
  );
}
