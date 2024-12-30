import React, { useState } from 'react';
import HomePage from './components/HomePage';
import OrderForm from './components/orderForm';
import OrderConfirmationForm from './components/OrderConfirmation';
import './App.css';
import Header from './components/Header';

const App = () => {
  const [orderData, setOrderData] = useState(null); // Sipariş verisi
  const [currentPage, setCurrentPage] = useState('home'); // Şu anki sayfa

  // Sipariş gönderildiğinde çalışacak fonksiyon
  const handleOrderSubmit = (data) => {
    setOrderData(data);
    setCurrentPage('confirmation'); // Sipariş gönderildikten sonra onay sayfasına geçiş
  };

  // Yeni sipariş için sayfayı sıfırlama
  const handleReset = () => {
    setOrderData(null);
    setCurrentPage('order'); // Yeni sipariş için formu tekrar göster
  };

  // Sayfa yönlendirmeleri (Prop Lifting ile)
  const handleStartOrder = () => {
    setCurrentPage('order');
  };

  return (
    <div className="App">
      {/* Sayfayı yönlendirme */}
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
