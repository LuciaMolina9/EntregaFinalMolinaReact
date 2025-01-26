import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = "/" element = { <ItemListContainer /> } />
          <Route path = "/categoria/:idCategoria" element = { <ItemListContainer /> } />
          <Route path = "/item/:idItem" element = { <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App