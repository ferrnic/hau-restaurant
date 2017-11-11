import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import { theme } from "./theme";
import Home from "./components/Home";
import PagesWrapper from "./components/PagesWrapper";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:path(carte|vins|restaurant)" component={PagesWrapper} />        
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
