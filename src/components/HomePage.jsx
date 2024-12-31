// HomePage.js
import React from 'react';

const HomePage = ({ onStartOrder }) => {
  return (
    <div className="homepage">
      <h1>KOD ACIKTIRIR
         PİZZA, DOYURUR</h1>
      <button onClick={onStartOrder}>ACIKTIM</button>
    </div>
  );
};

export default HomePage;
