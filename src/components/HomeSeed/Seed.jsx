import React from 'react';
import PropTypes from 'prop-types';

const Seed = ({ rotation, xTranslation, yTranslation }) => (
  <svg
    className="seed"
    id="seed"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1" x="0px" y="0px"
    viewBox="0 0 62 62"
    xmlSpace="preserve"    
    transform={`translate(${xTranslation} ${yTranslation})`}
  >
    <g id="Mode_Isolation" transform={`rotate(${rotation} 31 31)`}>
      <path d="M3.6,53.3c0,0,71-11.3,51.4-38.1S3.6,53.3,3.6,53.3z"/>
    </g>
  </svg>
)

Seed.Prototype = {
  rotation: PropTypes.number,
  xTranslation: PropTypes.number,
  yTranslation: PropTypes.number,
};

Seed.defaultProps = {
  rotation: 0,
  xTranslation: 0,
  yTranslation: 0,
};

export default Seed;