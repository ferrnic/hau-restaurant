import React from 'react';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CloudinaryContext } from 'cloudinary-react';

import axios from 'axios';

import { theme } from "./theme";
import Home from "./views/Home";
import PagesWrapper from "./views/PagesWrapper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: {
        restaurant: [],
        carte: [],
        vin: [],
      }
    }
  }

  fetchList(tag) {
    axios.get(`https://res.cloudinary.com/hau/image/list/${tag}.json`)
      .then(res => {
        this.setState({
          galleries: {
            ...this.state.galleries,
            [tag]: res.data.resources,
          }
        });
      });
  }

  componentDidMount() {
    this.fetchList('restaurant');
    this.fetchList('vins');
    this.fetchList('carte');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <CloudinaryContext
            cloudName="hau"
            width="auto"
          >
            <Switch>
              <Route
                path="/:path(carte|vins|restaurant)"
                component={PagesWrapper}
              />
              <Route
                path="/"
                component={Home}
              />
            </Switch>
          </CloudinaryContext>
        </Router>
      </ThemeProvider>
    );
  };
}

export default App;
