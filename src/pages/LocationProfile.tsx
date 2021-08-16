import React, { useEffect, useState} from "react";
import { AssocProvidersList } from "../components/AssocProvidersList";
import { AvgRating } from "../components/AvgRating";
import { ReviewsList } from "../components/ReviewsList";
import styles from "./LocationProfile.module.css";
import { Link, useParams } from "react-router-dom";
import { Point } from "geojson";
import axios from "axios";
import LocationResponse from "../models/location-response";
import ProviderResponse from "../models/provider-response";

const BACKEND_URL = "http://heartrans-back.herokuapp.com";

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
        coordinates: [0, 0]
    }
  };
  const emptyLocationPromise: Promise<LocationResponse> = new Promise(function(resolve, reject) {
    resolve(emptyLocation);});

  const { id } = useParams<{ id: string }>();

  const [location, setLocation] = useState<LocationResponse>(emptyLocation);

  useEffect(() => {
    axios
    .get(`${BACKEND_URL}/locations/${id}`)
    .then(async (response) => {
      const data: LocationResponse = await response.data.locationResponse;
      setLocation(data);
    })
    .catch((error) =>{
      console.log("Error:", error);
      alert("No provider in that location, try again!");
    });
  }, []); 

  
  return ( 
    <body>
    <section className="section is-small">
      <h1 className="title">
        {location.locationName}
      </h1>
      <hr></hr>
      <h2 className="subtitle">
      </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Address</h1>
        <h2 className="subtitle">{location.address}
          <hr></hr>
        </h2>
      </section>
      <section className="section is-small">
        <h1 className="title">Phone Number</h1>
        <h2 className="subtitle">{location.phone}
          <hr></hr>
        </h2>
      </section>
      
      <section className="section is-small">
        <h1 className="title">List of Providers in this Location</h1>
        <h2 className="subtitle">
          <hr></hr>
          {/* or could just map out list here */}
        </h2>
      </section>
    </body>
    );
}