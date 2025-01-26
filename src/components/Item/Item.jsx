import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({nombre, precio, foto}) => {
  return (
    <div className = 'cardProducto'>
        <img src={foto} alt={nombre} />
        <h4> Articulo: {nombre} </h4>
        <p>Precio: {precio} </p>
        <Link className='btn' to={`/item/${nombre}`}> Detalles </Link>
    </div>
  )
}

export default Item