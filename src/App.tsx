import React from "react";
import { Home } from "./components/Home";
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
  );
}

export default App;
