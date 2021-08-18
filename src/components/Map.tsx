import React from "react";
import { FaStar } from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import ProviderResponse from "../models/provider-response";
import logo from "../images/heartranslogo.png";
// import { Marker } from "./Marker";

const Marker: React.FC<any> = ({ text, name }) => {
  // <div>
  //   <div
  //     style={{
  // color: "white",
  // background: "rgb(44, 89, 235)",
  // padding: "15px 10px",
  // display: "inline-flex",
  // textAlign: "center",
  // alignItems: "center",
  // justifyContent: "center",
  // borderRadius: "0%",
  // transform: "translate(-50%, -50%)",
  //     }}
  //   >
  //     {text}
  //   </div>
  //   <p>{name}</p>
  // </div>

  return (
    <div>
      <div
        className="title"
        style={{
          // background: "rgb(44, 89, 235)",
          padding: "4px 10px 4px 10px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          borderRadius: "10%",
          display: "inline-block",
          color: "rgb(44, 89, 235)",
          // color: "blue",
          fontSize: "30px",
          fontFamily: "unset",
          width: "50px",
          height: "70px",
        }}
      >
        <img
          src={logo}
          alt="heartrans-logo"
          style={{
            width: "33px",
            height: "40px",
            color: "rgb(44, 89, 235)",
            // background: "rgb(44, 89, 235)",
            // padding: "15px 10px",
            // justifyContent: "center",
            // textAlign: "center",
            // alignItems: "center",
            // justifyContent: "center",
            borderRadius: "10%",
            // transform: "translate(-50%, -50%)",
          }}
        />
        <p
          className="title"
          style={{
            // background: "rgb(44, 89, 235)",
            // padding: "4px 10px",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            // borderRadius: "50%",
            // display: "inline-block",
            color: "white",
            fontSize: "35px",
            fontFamily: "unset",
            // width: "70px",
            // height: "70px",
          }}
        ></p>
        {text}
      </div>
    </div>
  );
};

const SimpleMap = (props: any) => {
  const { searchResults } = useContext(SearchContext);

  const renderList = () => {
    return searchResults.map((result: ProviderResponse, index) => {
      return result.locations.map((location: any) => {
        const locationIndex = index + 1;
        return (
          <Marker
            lat={location.latitude}
            lng={location.longitude}
            text={locationIndex}
            name={result.fullName}
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
    zoom: 14,
  };
  console.log(props.location);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE as string,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={props.center || props.location || defaultProps.center}
      >
        {props.location ? (
          <Marker lat={props.location.lat} lng={props.location.lng} text="" />
        ) : (
          renderList()
        )}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
