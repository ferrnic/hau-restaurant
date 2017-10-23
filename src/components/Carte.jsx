import React from 'react';
import {Link} from "react-router-dom";

const Carte = () => (
  <div>
    Carte
      <ul>
          <Link to='/vins'>vins</Link>
          <Link to='/restaurant'>restaurant</Link>
      </ul>
  </div>
);

export default Carte;
