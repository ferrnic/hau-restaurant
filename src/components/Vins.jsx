import React from 'react';
import {Link} from "react-router-dom";

const Vins = () => (
  <div>
    Vins
      <ul>
          <Link to='/carte'>carte</Link>
          <Link to='/restaurant'>restaurant</Link>
      </ul>
  </div>
);

export default Vins;
