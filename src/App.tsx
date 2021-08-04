import React from "react";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchResults } from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" component={SearchResults} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
