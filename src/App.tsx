import React from "react";
import { Home } from "./components/Home";
<<<<<<< HEAD
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
=======
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' component={} />
        </Switch>
      </Router>
    </>
>>>>>>> main
  );
}

export default App;
