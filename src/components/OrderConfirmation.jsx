// OrderConfirmationForm.js
import React from 'react';

const OrderConfirmationForm = ({ orderData, onReset }) => {
  if (!orderData) {
    return null;
  }

  const { name, pizzaSize, dough, extras, quantity, note, totalPrice } = orderData;

  return (
    <div className="confirmation">
      <h1>TEBRİKLER! SİPARİŞİNİZ ALINDI</h1>
      <h2>Merhaba, {name}!</h2>
      <h3>Sipariş Özeti:</h3>
      <p>Pizza Boyutu: {pizzaSize}</p>
      <p>Hamur: {dough}</p>
      <p>Ekstra Malzemeler: {extras.join(', ')}</p>
      <p>Sipariş Adedi: {quantity}</p>
      <p>Not: {note}</p>
      <p>Toplam Fiyat: ${totalPrice.toFixed(2)}</p>
      <button onClick={onReset}>Yeni Sipariş Ver</button>
    </div>
  );
};

export default OrderConfirmationForm;
