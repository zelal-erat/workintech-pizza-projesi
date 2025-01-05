import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderForm from './components/orderForm';
import OrderConfirmationForm from './components/OrderConfirmation';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [orderData, setOrderData] = useState(null);

  const handleOrderSubmit = (data) => {
    setOrderData(data);
  };

  const handleReset = () => {
    setOrderData(null);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* HomePage, OrderForm ve OrderConfirmationForm arasındaki yönlendirme işlemleri */}
          <Route path="/" exact>
            <HomePage onStartOrder={() => window.location.href = "/order"} />
          </Route>
          <Route path="/order">
            <OrderForm onOrderSubmit={handleOrderSubmit} />
          </Route>
          <Route path="/confirmation">
            <OrderConfirmationForm orderData={orderData} onReset={handleReset} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
