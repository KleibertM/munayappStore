import style from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './component/cart/Cart'
import DetailCards from './component/Card/DetailCards'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import { CartProvider } from './context/cartContext'
import BtnWhatsapp from './component/whatsapp/BtnWhatsApp'

// const Cart = lazy(()=> import('./component/cart/Cart'))
// const Footer = lazy(()=> import('./component/footer/Footer'))


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
        <Route path='/detail/:id' element={<DetailCards/>} /> 
      </Routes>
        </div>
        <BtnWhatsapp />
        <Footer />
      </div>
    </CartProvider>
    </>
  )
}

export default App
