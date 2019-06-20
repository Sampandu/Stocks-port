import React from 'react';
import Tilt from 'react-tilt';
import Light from './Light.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-3"
        options={{ max: 45 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img alt="Logo" src={Light} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
