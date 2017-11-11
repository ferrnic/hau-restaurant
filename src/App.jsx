import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { theme } from "./theme";
import Home from "./components/Home";
import PagesWrapper from "./components/PagesWrapper";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
      <Route path="/carte" render={props => (
        <PagesWrapper />   
      )}/>
      <Route path="/vins" render={props => (
        <PagesWrapper />   
      )}/>
      <Route path="/restaurant" render={props => (
        <PagesWrapper />   
      )}/>
      <Route path="/" component={Home}/>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
