// src/components/Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="bouncing-balls">
        <div className="bouncing-ball"></div>
        <div className="bouncing-ball"></div>
        <div className="bouncing-ball"></div>
      </div>
    </div>
  );
};

export default Preloader;
