// HomePage.js
import React from 'react';

import CardsFood from './CardsFood';
import FoodDeails from './FoodDeails';
import Kart from './Kart';
import TopRatedMenus from './TopRatedMenu';

const HomePage = ({ onStartOrder }) => {
  
  return (
    <div>
    <div className="homepage">
      <h1>fırsatı kaçırma</h1>
      <h2>KOD ACIKTIRIR
         PİZZA, DOYURUR</h2>
      <button onClick={onStartOrder}>ACIKTIM</button>
   
    </div> 
    <FoodDeails/>
    <Kart/>
    <TopRatedMenus/>
    <CardsFood/>
    </div>
    
  
  );
};

export default HomePage;
