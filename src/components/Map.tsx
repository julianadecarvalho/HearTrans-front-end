import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent: React.FC<any> = ({ text }) => (
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

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.6062,
      lng: -122.332,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE as string,
          }}
          defaultCenter={SimpleMap.defaultProps.center}
          defaultZoom={SimpleMap.defaultProps.zoom}
        >
          <AnyReactComponent lat={47.6062} lng={-122.332} text="My Marker" />
          <AnyReactComponent lat={47.6205} lng={-122.3493} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
