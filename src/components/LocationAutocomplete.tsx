import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const LocationAutocomplete = () => {
  const [value, setValue] = useState(null);
  return (
  <div>
    <GooglePlacesAutocomplete
      apiKey={process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}
      selectProps={{
        value,
        onChange: setValue,
        styles: {
          input: () => ({
            minWidth: '320px',

          }),
          control: () => ({
            borderRadius: '0px',
            background: 'white',
            height: '50px'
          })
        },
      }}
      autocompletionRequest={{
        componentRestrictions: {
        country: ['us', 'ca'],
        }
      }}
    />
  </div>
  
)};

export default LocationAutocomplete;

// import React, { useState, useEffect, useRef } from "react";

// let autoComplete: google.maps.places.Autocomplete;

// const loadScript = (url: string , callback: any) => {
//   let script = document.createElement("script");
//   script.type = "text/javascript";

//   if (document.readyState) {
//     document.onreadystatechange = function() {
//       if (document.readyState === "complete") {
//         document.onreadystatechange = null;
//         callback();
//       }
//     };
//   } else {
//     script.onload = () => callback();
//   }

//   script.src = url;
//   document.getElementsByTagName("head")[0].appendChild(script);
// };
// // change the any types later
// function handleScriptLoad(updateQuery: any, autoCompleteRef: any) {
//   autoComplete = new window.google.maps.places.Autocomplete(
//     autoCompleteRef.current,
//     { types: ["(cities)"], componentRestrictions: { country: "us" } }
//   );
//   autoComplete.setFields(["address_components", "formatted_address"]);
//   autoComplete.addListener("place_changed", () =>
//     handlePlaceSelect(updateQuery)
//   );
// }

// async function handlePlaceSelect(updateQuery: any) {
//   const addressObject = autoComplete.getPlace();
//   const query = addressObject.formatted_address;
//   updateQuery(query);
//   console.log(addressObject);
// }

// function SearchLocationInput() {
//   const [query, setQuery] = useState("");
//   const autoCompleteRef = useRef(null);

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY_GOOGLE_AUTOCOMPLETE}&libraries=places`,
//       () => handleScriptLoad(setQuery, autoCompleteRef)
//     );
//   }, []);

//   return (
//     <div className="search-location-input">
//       <input
//         ref={autoCompleteRef}
//         onChange={event => setQuery(event.target.value)}
//         placeholder="Enter a location"
//         value={query}
//       />
//     </div>
//   );
// }

// export default SearchLocationInput;