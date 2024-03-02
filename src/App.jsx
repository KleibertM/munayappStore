import style from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './component/cart/Cart'
import Home from './component/home/Home'
import { CartProvider } from './context/cartContext'
import BtnWhatsapp from './component/whatsapp/BtnWhatsApp'

function App() {

  return (
    <>
    <CartProvider>
      <div className={style.app_container}>
      <Navbar />
        <div className={style.main_content}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} /> 
      </Routes>
        </div>
        <BtnWhatsapp />
      </div>
    </CartProvider>
    </>
  )
}

export default App
