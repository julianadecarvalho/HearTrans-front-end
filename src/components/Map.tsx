import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



// export interface Coordinates {
//   lat: number;
//   lng: number;
//   text: string;
// }
// const AnyReactComponent: React.FC = ({ text }) => <div>{ text }</div>;

const AnyReactComponent = (props: {text: string}) =>  (
    <div>{props.text}</div>
)

class SimpleMap extends Component {
  static defaultProps = {

    center: {
      lat: 59.95,
      lng: 30.33
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
            // lat={59.955413}
            // lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;