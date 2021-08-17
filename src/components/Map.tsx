import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import ProviderResponse from "../models/provider-response";

const Marker: React.FC<any> = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

const SimpleMap = (props: any) => {
  const { searchResults } = useContext(SearchContext);
  console.log(props.center);
  const renderList = () => {
    return searchResults.map((result: ProviderResponse, index) => {
      return result.locations.map((location: any) => {
        // return <Marker marker={location} />;
        // console.log(location.latitude);
        const locationIndex = index + 1;
        return (
          <Marker
            lat={location.latitude}
            lng={location.longitude}
            text={locationIndex}
          />
        );
      });
    });
  };
  const defaultProps = {
    center: {
      lat: 47.6062,
      lng: -122.332,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE as string,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={props.center}
      >
        {/* <Marker lat={47.6062} lng={-122.332} text="My Marker" /> */}
        {/* <Marker lat={47.6205} lng={-122.3493} text="My Marker" /> */}

        {/* <div>{AnotherReactComponent}</div> */}

        {renderList()}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
