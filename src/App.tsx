import React, { useState } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchResults } from "./pages/SearchResults";
import { ProviderProfile } from "./pages/ProviderProfile";
import { LocationProfile } from "./pages/LocationProfile";
import { NavBar } from "./components/NavBar";
import { SearchContextProvider } from "./components/SearchContext";
import { AddProvider } from "./pages/AddProvider";
import { AddLocation } from "./pages/AddLocation";
import { AddLocationReview } from "./pages/AddLocationReview";
import { AddLocationToProvider } from "./pages/AddLocationToProvider";
import { AddProviderToLocation } from "./pages/AddProviderToLocation";

export interface Coords {
  lat: number;
  lng: number;
}

function App() {
  const [center, setCenter] = useState<Coords>({
    lat: 47.608013,
    lng: -122.335167,
  });
  const setNewCoords = (coords: any) => {
    setCenter({ ...center, lat: coords.lat, lng: coords.lng });
  };
  return (
    <SearchContextProvider>
      <Router>
        <NavBar setNewCoords={setNewCoords} />
        <Switch>
          <Route
            path="/search"
            component={() => <SearchResults center={center} />}
          />
          <Route path="/provider/:id" component={ProviderProfile} />
          <Route path="/location/:id" component={LocationProfile} />
          <Route path="/addprovider" component={AddProvider} />
          <Route path="/addlocation" component={AddLocation} />
          <Route path="/addlocationreview/:id" component={AddLocationReview} />
          <Route
            path="/addlocationtoprovider/:id"
            component={AddLocationToProvider}
          />
          <Route
            path="/addprovidertolocation/:id"
            component={AddProviderToLocation}
          />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </SearchContextProvider>
  );
}

export default App;
