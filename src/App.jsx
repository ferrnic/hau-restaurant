import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { theme } from "./theme";
import Home from "./components/Home";
import Carte from "./components/Carte";
import Vins from "./components/Vins";
import Restaurant from "./components/Restaurant";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/carte" component={Carte}/>
        <Route path="/vins" component={Vins}/>
        <Route path="/restaurant" component={Restaurant}/>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
