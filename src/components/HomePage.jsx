// HomePage.js
import React from 'react';

const HomePage = ({ onStartOrder }) => {
  return (
    <div className="homepage">
      <h1>Hoş Geldiniz!</h1>
      <button onClick={onStartOrder}>Sipariş Ver</button>
    </div>
  );
};

export default HomePage;
