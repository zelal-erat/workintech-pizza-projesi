import React, { useState, useRef } from 'react';
import { Form, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import './OrderForm.css';
import { useHistory } from 'react-router-dom';

const OrderForm = ({ onOrderSubmit }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [pizzaSize, setPizzaSize] = useState('');
  const [dough, setDough] = useState('normal');
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFastDelivery, setIsFastDelivery] = useState(false); // Yeni durum ekledik

  // Referanslar
  const nameRef = useRef(null);
  const sizeRef = useRef(null);
  const extrasRef = useRef(null);

  const pizzaPrice = 85.50;
  const sizePrices = { Small: 8, Medium: 10, Large: 12 };
  const doughPrices = { normal: 0, ince: 2, kalın: 4 };
  const extraPrices = {
    Pepperoni: 5,
    'Tavuk Izgara': 5,
    Mısır: 5,
    Sarımsak: 5,
    Ananas: 5,
    Sosis: 5,
    Soğan: 5,
    Sucuk: 5,
    Biber: 5,
    Kabak: 5,
    Salam: 5,
    Domates: 5,
    Jalepone: 5,
  };

  // Hata mesajlarını güncelleme
  const validateForm = () => {
    const errors = {};

    if (name.length < 3) {
      errors.name = 'Lütfen en az 3 karakter girin.';
    }

    if (!pizzaSize) {
      errors.size = 'Lütfen boyut seçin.';
    }

    if (extras.length < 4) {
      errors.extras = 'Lütfen en az 4 ekstra malzeme seçin.';
    } else if (extras.length > 10) {
      errors.extras = 'Lütfen en fazla 10 ekstra malzeme seçin.';
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length >= 3) {
      setErrorMessages((prevErrors) => {
        const { name, ...rest } = prevErrors;
        return rest;
      });
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        name: 'Lütfen en az 3 karakter girin.',
      }));
    }
  };

  const handleSizeChange = (e) => {
    setPizzaSize(e.target.value);
    if (e.target.value) {
      setErrorMessages((prevErrors) => {
        const { size, ...rest } = prevErrors;
        return rest;
      });
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        size: 'Lütfen boyut seçin.',
      }));
    }
  };

  const handleExtrasChange = (e) => {
    const extra = e.target.value;
    const isChecked = e.target.checked;
  
    
    setExtras((prevExtras) => {
      let updatedExtras;
      if (isChecked) {
        updatedExtras = [...prevExtras, extra];
      } else {
        updatedExtras = prevExtras.filter((item) => item !== extra);
      }
  
      // Ekstra malzeme sayısını kontrol et
      if (updatedExtras.length < 4) {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          extras: 'Lütfen en az 4 ekstra malzeme seçin.',
        }));
      } else if (updatedExtras.length > 10) {
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          extras: 'Lütfen en fazla 10 ekstra malzeme seçin.',
        }));
      } else {
        setErrorMessages((prevErrors) => {
          const { extras, ...rest } = prevErrors;
          return rest;
        });
      }
  
      return updatedExtras;
    });
  };
  const handleDoughChange = (e) => setDough(e.target.value);

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateExtrasPrice = () => {
    return extras.reduce((total, extra) => total + extraPrices[extra], 0);
  };

  const calculateTotalPrice = () => {
    const sizePrice = sizePrices[pizzaSize] || 0;
    const doughPrice = doughPrices[dough];
    const extrasPrice = calculateExtrasPrice();
    const fastDeliveryPrice = isFastDelivery ? 50 : 0; // Hızlı kurye ücreti

    return (pizzaPrice + sizePrice + doughPrice + extrasPrice + fastDeliveryPrice) * quantity;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      // Hatalı alan varsa, ilgili input alanına odaklan
      setTimeout(() => {
        if (errorMessages.name) {
          nameRef.current.focus();
        } else if (errorMessages.size) {
          sizeRef.current.focus();
        } else if (errorMessages.extras) {
          extrasRef.current.focus();
        }
      }, 0);  // Hatalı alanın odaklanmasını hemen yapmak için setTimeout kullanıyoruz
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
      isFastDelivery, // Hızlı kurye bilgisini ekle
    };

    setLoading(true);

    axios
      .post('https://reqres.in/api/pizza', orderData)
      .then((response) => {
        console.log('Sipariş başarılı:', response.data);
        onOrderSubmit(orderData);
        history.push('/confirmation');
      })
      .catch((error) => {
        console.error('Sipariş gönderilirken hata oluştu:', error);
        setErrorMessages({ apiError: 'Sipariş gönderilirken bir hata oluştu.' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Form className="order-form" onSubmit={handleSubmit}>
      <img src="./images/iteration-2-images/pictures/form-banner.png" alt="banner" />

      <Card className="pizza-details">
        <CardBody>
          <h1>Pizza Adı: Position Absolute Acı Pizza</h1>
          <h2>Fiyat: ₺{pizzaPrice}</h2>
          <p>
            Frontend Developer olarak hala position: absolute kullanıyorsan bu çok acı pizza tam
            sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
            daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
            genel olarak yuvarlak bir hamur işidir.
          </p>
        </CardBody>
      </Card>

      {/* Boyut Seçimi */}
      <Card className="size-selection">
        <CardBody>
          <label className="bold-boyut">Boyut:</label>
          {['Small', 'Medium', 'Large'].map((size) => (
            <div key={size} className="radio-container">
              <input
                type="radio"
                id={size}
                name="size"
                value={size}
                checked={pizzaSize === size}
                onChange={handleSizeChange}
                className="radio-button"
                ref={sizeRef}
              />
              <label htmlFor={size} className="radio-label">
                {size === 'Small' ? 'S' : size === 'Medium' ? 'M' : 'L'}
              </label>
            </div>
          ))}

          {errorMessages.size && (
            <div className="error-message-container">
              <p className="error-message">*{errorMessages.size}</p>
            </div>
          )}
        </CardBody>
      </Card>
      


      <Card className="dough-selection">
  <CardBody>
    <label htmlFor="dough">Hamur:</label>
    <select
      id="dough"
      value={dough}
      onChange={handleDoughChange}
    >
      {['normal', 'ince', 'kalın'].map((doughType) => (
        <option key={doughType} value={doughType}>
          {doughType.charAt(0).toUpperCase() + doughType.slice(1)}
        </option>
      ))}
    </select>
  </CardBody>
</Card>


      {/* Ekstra Malzeme Seçimi */}
      <Card className="extras-selection">
        <label className="extras-label">Ekstra Malzemeler (4-10 adet seçiniz.) ₺5:</label>
        <CardBody className="extra-malzemeler">
          {[
            'Pepperoni',
            'Tavuk Izgara',
            'Mısır',
            'Sarımsak',
            'Ananas',
            'Sosis',
            'Soğan',
            'Sucuk',
            'Biber',
            'Kabak',
            'Salam',
            'Domates',
          ].map((item) => (
            <div key={item}>
              <input
                type="checkbox"
                id={item}
                value={item}
                onChange={handleExtrasChange}
                checked={extras.includes(item)}
                aria-labelledby={item}
                ref={item === 'Pepperoni' ? extrasRef : null}
              />
              <label htmlFor={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</label>
            </div>
          ))}
          
        </CardBody>
      </Card>
      {errorMessages.extras && (
            <div className="error-message-container">
              <p className="error-message">*{errorMessages.extras}</p>
            </div>
          )}

      {/* Hızlı Kurye Seçeneği */}
      <Card className="fast-delivery">
        <CardBody>
          <label>
            <input
              type="checkbox"
              checked={isFastDelivery}
              onChange={() => setIsFastDelivery((prev) => !prev)}
            />
            Hızlı teslimat seçeneği(₺50)
          </label>
        </CardBody>
      </Card>

      {/* İsim Girişi */}
      <Card className="name-input">
        <CardBody>
          <label htmlFor="name">İsim:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            minLength={3}
            placeholder="İsminizi girin"
            data-cy="ad-input"
            ref={nameRef}
          />
          {errorMessages.name && (
            <div className="error-message-container">
              <p className="error-message">*{errorMessages.name}</p>
            </div>
          )}
        </CardBody>
      </Card>

      {/* Sipariş Notu */}
      <Card className="order-note">
        <CardBody>
          <label htmlFor="note">Sipariş Notu:</label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Eklemek istediğiniz bir not var mı?"
          />
        </CardBody>
      </Card>

      {/* Adet Seçimi */}
      <Card className="quantity">
        <CardBody>
          <button type="button" onClick={() => handleQuantityChange('decrease')}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => handleQuantityChange('increase')}>+</button>
        </CardBody>
      </Card>

      {/* Toplam Fiyat */}
      <Card className="total-price">
        <CardBody>
          <p>Toplam Ekstra Malzeme Fiyatı: ₺{calculateExtrasPrice().toFixed(2)}</p>
          <p>Toplam Fiyat: ₺{calculateTotalPrice().toFixed(2)}</p>
          <div className="order-button">
            <button type="submit" disabled={loading}>
              {loading ? 'Gönderiliyor...' : 'Siparişi Ver'}
            </button>
          </div>
          {errorMessages.apiError && <p className="error-message">{errorMessages.apiError}</p>}
        </CardBody>
      </Card>
    </Form>
  );
};

export default OrderForm;
