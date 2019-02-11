import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import search from "./pages/search";
import saved from "./pages/saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './style/App.css'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={search} />
          <Route exact path="/books" component={search} />
          <Route exact path="/saved" component={saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;