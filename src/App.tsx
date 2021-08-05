import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchResults } from "./pages/SearchResults";
import { ProviderProfile } from "./pages/ProviderProfile";
import { LocationProfile } from "./pages/LocationProfile";
// import { AddReview } from "./pages/AddReview";
// import { AddLocation } from "./pages/AddLocation";
// import { AddProvider } from "./pages/AddProvider";
// import { Report } from "./pages/Report";
// import { Donate } from "./pages/Donate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={SearchResults} />
        <Route path="/" component={Home} />
        <Route path="/provider" component={ProviderProfile} />
        <Route path="/location" component={LocationProfile} />
        {/* <Route path="/addreview" component={AddReview} />
        <Route path="/addlocation" component={AddLocation} />
        <Route path="/addprovider" component={AddProvider} />
        <Route path="/report" component={Report} />
        <Route path="/donate" component={Donate} /> */}
      </Switch>
    </Router>
  );
}

export default App;
