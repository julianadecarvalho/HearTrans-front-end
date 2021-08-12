import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



// export interface Coordinates {
//   lat: number;
//   lng: number;
//   text: string;
// }
// const AnyReactComponent: React.FC = ({ text }) => <div>{ text }</div>;

const AnyReactComponent = (props: {text: string, lat: number, lng: number}) =>  (
    <div>{props.text}</div>
)

class SimpleMap extends Component {
  static defaultProps = {

    center: {
      lat: 47.608013,
      lng: -122.335167
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE as string}}
          defaultCenter={SimpleMap.defaultProps.center}
          defaultZoom={SimpleMap.defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={47.608013}
            lng={-122.335167}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;