// OrderConfirmationForm.js
import React from 'react';

const OrderConfirmationForm = ({ orderData }) => {
  if (!orderData) {
    return null;
  }

  const { name, pizzaSize, dough, extras, quantity, note, totalPrice } = orderData;

  return (
    <div className="confirmation">

      <h1>TEBRİKLER! SİPARİŞİNİZ ALINDI</h1>
    
      
    </div>
  );
};

export default OrderConfirmationForm;
