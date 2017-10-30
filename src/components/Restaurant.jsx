import React from 'react';
import {Link} from "react-router-dom";

const Restaurant = () => (
  <div>
    Restaurant
      <ul>
        <Link to='/vins'>vins</Link>
        <Link to='/carte'>carte</Link>
      </ul>
  </div>
);

export default Restaurant;
