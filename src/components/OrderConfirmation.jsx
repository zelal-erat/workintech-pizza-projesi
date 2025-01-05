import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const OrderConfirmationForm = ({ orderData, onReset }) => {
  const history = useHistory();  

  if (!orderData) {
    return null;
  }

  const { name, pizzaSize, dough, extras, quantity, note, totalPrice, extrasPrice } = orderData;

  const handleReset = () => {
    onReset();  // orderData'yı sıfırlama işlemi
    history.push('/order');  // '/order' sayfasına yönlendirme yapıyoruz
  };

  return (
    <div className="confirmation">
      <div className='tebrik'>
        <h1>lezzetin yolda</h1>
        <h2>SİPARİŞ ALINDI</h2>
      </div>
      
      <div className="siparis">
        <p>Pizza Boyutu: {pizzaSize}</p>
        <p>Hamur: {dough}</p>
        <p>Ekstra Malzemeler: {extras.join(', ')}</p>
      </div>

      <div className='toplam-özet'>
        <h3>Sipariş Toplamı</h3>
        <span>₺{totalPrice.toFixed(2)}</span>
      </div>

      <button onClick={handleReset}>Yeni Sipariş Ver</button>
    </div>
  );
};

export default OrderConfirmationForm;
