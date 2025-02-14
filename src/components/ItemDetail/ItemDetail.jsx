import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCart } from '../../context/ContextCart'


const ItemDetail = ({ nombre, tipo, colores, talles, foto, precio, stock }) => {
  
  const [agregarPares, setAgregarPares] = useState(0);

  const {agregarCarrito} = useContext(ContextCart)

  const manejadorCantidad = (pares) => {
    setAgregarPares(pares);
    // console.log("pares agregados: " + pares)

    const item = { nombre, precio, colores, talles };
    agregarCarrito(item, pares)

  }
 
  return (
    <div>
      <h2> Articulo: {nombre} </h2>
      <img src={foto} alt={nombre} />
      <h3> Tipo:  {tipo} </h3>
      <h3> Talles: {talles} </h3>
      <h3> Colores: {colores}  </h3>
      <h3> Precio: ${precio} </h3>
      {
        agregarPares > 0 ? (<Link to="/Cart"> Finalizar compra </Link>) :
          (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>

  )
}

export default ItemDetail