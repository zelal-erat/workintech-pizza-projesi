import React, { useState } from 'react';
import { Form, Card, CardBody } from 'reactstrap';
import './OrderForm.css';

const OrderForm = () => {
  const [pizzaSize, setPizzaSize] = useState('medium');
  const [dough, setDough] = useState('normal');
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

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
    'kanada jambonu': 5,
    domates: 5,
    jalepone: 5,
  };


  const handleSizeChange = (size) => setPizzaSize(size);
  const handleDoughChange = (doughType) => setDough(doughType);

  const handleExtrasChange = (extra) => {
    setExtras(prevExtras =>
      prevExtras.includes(extra)
        ? prevExtras.filter(item => item !== extra)
        : [...prevExtras, extra]
    );
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    const sizePrice = sizePrices[pizzaSize];
    const doughPrice = doughPrices[dough];
    const extrasPrice = extras.reduce((total, extra) => total + extraPrices[extra], 0);
    return (pizzaPrice + sizePrice + doughPrice + extrasPrice) * quantity;
  };

  return (
    <Form className="order-form">
      <h1>Teknolojik Yemekler</h1>

      {/* Pizza Detayları (Card) */}
      <Card className="pizza-details">
        <CardBody>
          <h2>Pizza Adı: Margarita</h2>
          <p>Fiyat: ${pizzaPrice}</p>
          <p>Açıklama: Lezzetli bir Margarita pizzası.</p>
        </CardBody>
      </Card>

      {/* Boyut Seçimi (Card) */}
      <Card className="size-selection">
  <CardBody>
    <label>Boyut:</label>
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
  <CardBody>
    <label>Ekstra Malzemeler:</label>
    {[
      'pepperoni', 'tavuk izgara', 'misir', 'sarimsak', 'ananas', 'sosis', 
      'sogan', 'sucuk', 'biber', 'kabak', 'kanada jambonu', 'domates', 'jalepone'
    ].map((item) => (
      <div key={item}>
        <input
          type="checkbox"
          id={item}
          onChange={() => handleExtrasChange(item)}
        />
        <label htmlFor={item}>{item.toUpperCase()}</label>
      </div>
    ))}
  </CardBody>
</Card>

      {/* Sipariş Notu (Card) */}
      <Card className="note-section">
        <CardBody>
          <label>
            Sipariş Notu:
            <textarea placeholder="Not bırakın..."></textarea>
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
            <button type="submit">Siparişi Ver</button>
          </div>
        </CardBody>
      </Card>
    </Form>
  );
};

export default OrderForm;
