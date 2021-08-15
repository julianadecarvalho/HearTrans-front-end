import React, { useState } from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchResults } from "./pages/SearchResults";
// import { SearchResults } from "./components/SearchResults";
import { ProviderProfile } from "./pages/ProviderProfile";
import { LocationProfile } from "./pages/LocationProfile";
import { NavBar } from "./components/NavBar";
import { SearchContextProvider } from "./components/SearchContext";
import { AddProvider } from "./pages/AddProvider";
import { AddLocation } from "./pages/AddLocation";
import { AddProviderReview } from "./pages/AddProviderReview";
import { AddLocationReview } from "./pages/AddLocationReview";

// import { AddReview } from "./pages/AddReview";
// import { AddLocation } from "./pages/AddLocation";
// import { AddProvider } from "./pages/AddProvider";
// import { Report } from "./pages/Report";
// import { Donate } from "./pages/Donate";

function App() {
  return (
    <SearchContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/search" component={SearchResults} />
          <Route path="/provider/:id" component={ProviderProfile} />
          <Route path="/location/:id" component={LocationProfile} />
          <Route path="/addprovider" component={AddProvider} />
          <Route path="/addlocation" component={AddLocation} />
          <Route path="/addproviderreview/:id" component={AddProviderReview} />
          <Route path="/addlocationreview/:id" component={AddLocationReview} />
          <Route path="/" component={Home} />
          {/* 
          <Route path="/report" component={Report} />
          <Route path="/donate" component={Donate} /> */}
        </Switch>
      </Router>
    </SearchContextProvider>
  );
}

export default App;
