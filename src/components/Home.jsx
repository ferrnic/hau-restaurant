import React from 'react';
import {Link} from "react-router-dom";

const Home = () => (
  <div>
    Home
      <ul>
          <Link to='/carte'>carte</Link>
          <Link to='/vins'>vins</Link>
          <Link to='/restaurant'>restaurant</Link>
      </ul>
  </div>
);

export default Home;
