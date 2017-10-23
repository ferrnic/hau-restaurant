import React, { Component } from 'react';
import './App.css';
import {theme} from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Route>
          my app
        </Route>
      </ThemeProvider>
    );
  }
}

export default App;
