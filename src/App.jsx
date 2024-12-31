import React, { useState } from 'react';
import HomePage from './components/HomePage';
import OrderForm from './components/orderForm';
import OrderConfirmationForm from './components/OrderConfirmation';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [orderData, setOrderData] = useState(null); 
  const [currentPage, setCurrentPage] = useState('home'); 

 
  const handleOrderSubmit = (data) => {
    setOrderData(data);
    setCurrentPage('confirmation'); // Sipariş gönderildikten sonra onay sayfasına geçiş
  };

  
  const handleReset = () => {
    setOrderData(null);
    setCurrentPage('order'); // Yeni sipariş için formu tekrar göster
  };

  
  const handleStartOrder = () => {
    setCurrentPage('order');
  };

  return (
    <div className="App">
      
      <Header />
      {currentPage === 'home' && (
        <HomePage onStartOrder={handleStartOrder} />
      )}
      {currentPage === 'order' && (
        <OrderForm onOrderSubmit={handleOrderSubmit} />
      )}
      {currentPage === 'confirmation' && (
        <OrderConfirmationForm orderData={orderData} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
