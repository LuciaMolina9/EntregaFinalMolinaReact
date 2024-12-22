import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import TituloPrincipal from './components/TituloPrincipal/TituloPrincipal';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer />
      <TituloPrincipal/>
      <img className= 'imagen' src="https://static8.depositphotos.com/1029233/916/i/450/depositphotos_9164834-stock-photo-shoes-shoes.jpg" alt="Imagen zapatos" />
    </div>
  )
}

export default App