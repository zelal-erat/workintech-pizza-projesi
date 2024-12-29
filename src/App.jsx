import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderForm from './components/orderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrderForm></OrderForm>
      </>
  )
}

export default App
