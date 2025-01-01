// OrderForm.js
import React, { useState } from 'react';
import { Form, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import './OrderForm.css';

const OrderForm = ({ onOrderSubmit }) => {
  const [name, setName] = useState('');
  const [pizzaSize, setPizzaSize] = useState('medium');
  const [dough, setDough] = useState('normal');
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const pizzaPrice = 85.50; // Temel pizza fiyatı
  const sizePrices = { small: 8, medium: 10, large: 12 };
  const doughPrices = { normal: 0, thick: 2 };
  const extraPrices = {
    cheese: 5,
    olives: 5,
    mushrooms: 5,
    pepperoni: 5,
    'tavuk izgara': 5,
    misir: 5,
    sarimsak: 5,
    ananas: 5,
    sosis: 5,
    sogan: 5,
    sucuk: 5,
    biber: 5,
    kabak: 5,
    'salam': 5,
    domates: 5,
    jalepone: 5,
  };
  const isNameValid = name.length >= 3;


  // Formu disable etmek için geçerli form verilerini kontrol et
  const isFormDisabled = () => {
    return !(isNameValid && pizzaSize && dough && extras.length >= 4 && extras.length <= 10);
  };

  // Boyut seçimini güncelle
  const handleSizeChange = (size) => setPizzaSize(size);

  // Hamur seçimini güncelle
  const handleDoughChange = (doughType) => setDough(doughType);

  // Ekstra malzeme seçimlerini güncelle
  const handleExtrasChange = (extra) => {
    setExtras((prevExtras) =>
      prevExtras.includes(extra)
        ? prevExtras.filter((item) => item !== extra)
        : [...prevExtras, extra]
    );
  };

  // Sipariş adedini artır/değiştir
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Toplam fiyat hesaplama
  const calculateTotalPrice = () => {
    const sizePrice = sizePrices[pizzaSize];
    const doughPrice = doughPrices[dough];
    const extrasPrice = extras.reduce((total, extra) => total + extraPrices[extra], 0);
    return (pizzaPrice + sizePrice + doughPrice + extrasPrice) * quantity;
  };

  // Sipariş gönderme
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormDisabled()) {
      setErrorMessage('Lütfen eksik bilgileri tamamlayın');
      return;
    }

    const orderData = {
      name,
      pizzaSize,
      dough,
      extras,
      quantity,
      note,
      totalPrice: calculateTotalPrice(),
    };

    setLoading(true);
    setErrorMessage('');

    // Axios POST isteği ile siparişi gönder
    axios
      .post('https://reqres.in/api/pizza', orderData) 
      .then((response) => {
        console.log('Sipariş başarılı:', response.data);
        onOrderSubmit(orderData);
      })
      .catch((error) => {
        console.error('Sipariş gönderilirken hata oluştu:', error);
        setErrorMessage('Sipariş gönderilirken bir hata oluştu.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form className="order-form" onSubmit={handleSubmit}>
       {/* İsim Girişi (Card) */}

      {/* Pizza Detayları (Card) */}
      <Card className="pizza-details">
        <CardBody>
          <h1>Pizza Adı:Position Absolute Acı Pizza</h1>
          <h2>Fiyat: ${pizzaPrice}</h2>
          <p>Frontent Dev olarak hala position: absolute kullanıyorsan bu çok acı pizza tam sana
          göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
          sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
          genel olarak yuvarlak bir hamur işidir.</p>
        </CardBody>
      </Card>

      {/* Boyut Seçimi (Card) */}
      <Card className="size-selection">
        <CardBody>
          <label className='bold-boyut' >Boyut:</label>
          <div>
            <input
              type="radio"
              id="small"
              name="size"
              value="small"
              checked={pizzaSize === 'small'}
              onChange={() => handleSizeChange('small')}
            />
            <label htmlFor="small">Küçük</label>
          </div>
          <div>
            <input
              type="radio"
              id="medium"
              name="size"
              value="medium"
              checked={pizzaSize === 'medium'}
              onChange={() => handleSizeChange('medium')}
            />
            <label htmlFor="medium">Orta</label>
          </div>
          <div>
            <input
              type="radio"
              id="large"
              name="size"
              value="large"
              checked={pizzaSize === 'large'}
              onChange={() => handleSizeChange('large')}
            />
            <label htmlFor="large">Büyük</label>
          </div>
        </CardBody>
      </Card>

      {/* Hamur Seçimi (Card) */}
      <Card className="dough-selection">
        <CardBody>
          <label>
            Hamur:
            <select value={dough} onChange={(e) => handleDoughChange(e.target.value)}>
              <option value="normal">Normal</option>
              <option value="thick">Kalın</option>
            </select>
          </label>
        </CardBody>
      </Card>

      {/* Ekstra Malzeme Seçimi (Card) */}
      <Card className="extras-selection">
      <label >Ekstra Malzemeler (4-10 adet) :</label>
        <CardBody className='extra-malzemeler'>
          {[ 
            'pepperoni', 'tavuk izgara', 'misir', 'sarimsak', 'ananas', 'sosis', 
            'sogan', 'sucuk', 'biber', 'kabak', 'salam', 'domates', 'jalepone'
          ].map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                onChange={() => handleExtrasChange(item)}
                checked={extras.includes(item)}
              />
             <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>

            </div>
          ))}
        </CardBody>
      </Card>
      <Card className="name-input">
        <CardBody>
          <label >
            İsim:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={3}
              placeholder="İsminizi girin"
              data-cy="ad-input"
            />
          </label>
          {!isNameValid && name.length > 0 && (
            <p className="error-message">Lütfen en az 3 karakter girin.</p>
          )}
        </CardBody>
      </Card>

      
      
      <Card className="order-note">
        <CardBody>
          <label>
            Sipariş Notu
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder=" Eklemek istediğiniz bir not var mı?"
            />
          </label>
        </CardBody>
      
      </Card>
      {/* Sipariş Adedi Seçimi (Card) */}
      <Card className="quantity">
        <CardBody>
          <button type="button" onClick={() => handleQuantityChange('decrease')}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => handleQuantityChange('increase')}>+</button>
        </CardBody>
      </Card>

      {/* Toplam Fiyat ve Sipariş Ver Butonu (Card) */}
      <Card className="total-price">
        <CardBody>
        
          <p>Toplam Fiyat: ${calculateTotalPrice().toFixed(2)}</p>
          <div className="order-button">
            <button type="submit" disabled={loading || isFormDisabled()}>
              {loading ? 'Gönderiliyor...' : 'Siparişi Ver'}
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </CardBody>
      </Card>
    </Form>
  );
};

export default OrderForm;
