import React, { useEffect, useState } from "react";
import { AssocProvidersList } from "../components/AssocProvidersList";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./LocationProfile.module.css";
import { Link, useParams } from "react-router-dom";
import { Point } from "geojson";
import axios from "axios";
import LocationResponse from "../models/location-response";
import ProviderResponse from "../models/provider-response";
import { ProviderProfile } from "./ProviderProfile";
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
  const emptyLocationPromise: Promise<LocationResponse> = new Promise(function (
    resolve,
    reject
  ) {
    resolve(emptyLocation);
  });

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
  return (
    <div className="columns">
      <div className="column is-two-fifths">
        <section className="section is-small">
          <h1 className="title">{location.locationName}</h1>
          <hr></hr>

          <h2 className="subtitle">
            <a href={location.googleMapsUrl}>{location.address}</a>
          </h2>
          <h2 className="subtitle">{location.phone}</h2>
        </section>

        <section className="section is-small">
          <h1 className="title">List of Providers in this Location</h1>
          <h2 className="subtitle">
            <hr></hr>
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
            <button className="button is-medium">Add Provider</button>
          </Link>
        </section>
        <footer>
          <button className="button is-small" onClick={deleteLocation}>
            Delete this location
          </button>
        </footer>
      </div>
      {/* possibly add custom css to column */}
      {/* this simple map div is to try to render map in location */}
      <div className={`column ${styles["gmap"]}`}>
        <SimpleMap
          location={{ lat: location.latitude, lng: location.longitude }}
        />
      </div>
    </div>
          <div>
            {location.providers.map((provider) => {
              return (
                <Link to={`/provider/${provider.id}`}>
                  {provider.fullName}, {provider.titles}, ({provider.pronouns})
                </Link>
              );
            })}
          </div>
        </h2>
        <Link to={`/addprovidertolocation/${id}`}>
          <button className="button is-medium is-primary is-light">Add Provider</button>
        </Link>
      </section>
      <footer>
        <button className="button is-small is-primary is-light" onClick={deleteLocation}>
          Delete this location
        </button>
      </footer>
    </body>
  );
}
