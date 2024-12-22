import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = ({tienda, saludo}) => {
  return (
    <div>
        <h1 style={{color: "steelblue" }}>{tienda}</h1>
        <h2>{saludo}</h2>
    </div>
  )
}

export default ItemListContainer