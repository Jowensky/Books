import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import search from "./pages/search";
import saved from "./pages/saved";
import authors from "./pages/authors"
import './style/App.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={saved} />
          <Route exact path="/bookStore" component={search} />
          <Route exact path="/libary" component={saved} />
          <Route exact path="/authors" component={authors} />
          <Route component={saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;