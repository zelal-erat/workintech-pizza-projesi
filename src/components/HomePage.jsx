// HomePage.js
import React from 'react';


const HomePage = ({ onStartOrder }) => {
  return (
    <div className="homepage">
      <h1>fırsatı kaçırma</h1>
      <h2>KOD ACIKTIRIR
         PİZZA, DOYURUR</h2>
      <button onClick={onStartOrder}>ACIKTIM</button>
    </div>
  );
};

export default HomePage;
