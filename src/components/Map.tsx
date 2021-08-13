import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";

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
const AnotherReactComponent: any = () => {
  const { searchResults } = useContext(SearchContext);
  const renderList = () => {
    return searchResults.map((result) => {
      return result.locations.map((location: any) => {
        // return <AnyReactComponent marker={location} />;
        // console.log(location.latitude);
        return (
          <li>
            {" "}
            <AnyReactComponent
              lat={location.latitude}
              lng={location.longitude}
            />
          </li>
        );
      });
    });
  };
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.6062,
      lng: -122.332,
    },
    zoom: 11,
  };

  render() {
    // const SearchResultsMarkers = () => {
    // const { searchResults } = useContext(SearchContext);
    // const renderList = () => {
    //   return searchResults.map((result) => {
    //     return result.locations.map((location: any) => {
    //       // return <AnyReactComponent marker={location} />;
    //       // console.log(location.latitude);
    //       <li>
    //         {" "}
    //         <AnyReactComponent
    //           lat={location.latitude}
    //           lng={location.longitude}
    //         />
    //       </li>;
    //     });
    //   });
    // };
    // };
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
          {/* <AnyReactComponent lat={47.6205} lng={-122.3493} text="My Marker" /> */}

          <div>{AnotherReactComponent}</div>
          {/* <AnotherReactComponent /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
