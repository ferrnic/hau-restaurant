import React from 'react';
import axios from 'axios';
import cloudinary from 'cloudinary-core';
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CloudinaryContext } from 'cloudinary-react';

import { theme } from "./theme";
import Home from "./views/Home";
import PagesWrapper from "./views/PagesWrapper";

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

const orderByPublic_id= (a,b) => {
  if (a.public_id < b.public_id)
    return -1;
  if (a.public_id > b.public_id)
    return 1;
  return 0;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchList = this.fetchList.bind(this);

    this.state = {
      galleries: {
        restaurant: [],
        carte: [],
        vins: [],
      }
    }
  }

  fetchList = (tag) => {
    const _this = this;

    return new Promise(function (resolve) {
      axios.get(`https://res.cloudinary.com/hau/image/list/${tag}.json`)
        .then(res => {
          // order the list of images by public_id
          const orderedImagesList = res.data.resources.sort(orderByPublic_id);
          _this.setState({
            width: window.innerWidth,
            galleries: {
              ..._this.state.galleries,
              [tag]: orderedImagesList,
            }
          });
          resolve(orderedImagesList);
        })
    });
  };

  createMBackgroundImageURL = (publicId) => {
    const _this = this;

    return new Promise(function (resolve) {
      const t = new cloudinary.Transformation();
      if (_this.state.width > theme.breakpoint) {
        t.crop('scale').width(2000).quality('auto:good').fetchFormat('auto');
      } else {
        t.crop('scale').width(1000).quality('auto:good').fetchFormat('auto');
      }
      resolve(cloudinaryCore.url(publicId, t))
    });
  };

  cacheImages = (orderedImagesList) => {
    orderedImagesList.map(image => {
      let img = new Image();
      this.createMBackgroundImageURL(image.public_id)
        .then(res => {img.src = res;})
    });
  };

  componentDidMount() {
    this.fetchList('restaurant').then((orderedImagesList) => {this.cacheImages(orderedImagesList)});
    this.fetchList('carte').then((orderedImagesList) => {this.cacheImages(orderedImagesList)});
    this.fetchList('vins').then((orderedImagesList) => {this.cacheImages(orderedImagesList)});

    window.addEventListener("resize", () => this.updateDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDimensions());
  }

  updateDimensions() {
    this.setState({width: window.innerWidth});
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <CloudinaryContext cloudName="hau">
            <Switch>
              <Route
                path="/:path(carte|vins|restaurant)"
                render={({ location }) => (
                  <PagesWrapper
                    location={location}
                    galleries={this.state.galleries}
                    width={this.state.width}
                  />
                )}
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
