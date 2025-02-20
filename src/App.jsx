import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/ContextCart';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Products />
      </BrowserRouter>
    </div>
  )
}

export default App