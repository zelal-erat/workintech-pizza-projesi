// OrderConfirmationForm.js
import React from 'react';




const OrderConfirmationForm = ({ orderData, onReset }) => {
  if (!orderData) {
    return null;
  }

  const { name, pizzaSize, dough, extras, quantity, note, totalPrice,extrasPrice } = orderData;

  return (
    <div className="confirmation">
      <div className='tebrik'>
      <h1>Lezzetin yolda</h1>
      <h2>Sipariş Alındı</h2>
      </div>
      
      
      <div className='ozet'>
    <div className="siparis">
      <p>Pizza Boyutu: {pizzaSize}</p>
      <p>Hamur: {dough}</p>
      <p>Ekstra Malzemeler: {extras.join(', ')}</p>
      </div>
      <div className='toplam-özet'>
        <h3>Sipariş Toplamı</h3>
      <p>Toplam : ₺{totalPrice.toFixed(2)}</p>
      </div>
      <button onClick={onReset}>Yeni Sipariş Ver</button>
      </div>
    </div>
  );
};

export default OrderConfirmationForm;
