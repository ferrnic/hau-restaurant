import React, { Component } from 'react';
import { Switch, Route } from 'react-router'

class Route extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/vins" component={Vins}/>
        <Route path="/restaurant" component={Restaurant}/>
      </Switch>
    );
  }
}

export default Route;
