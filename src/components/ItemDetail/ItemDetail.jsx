import React from 'react'

const ItemDetail = ( {nombre, tipo, colores, talles, foto, precio} ) => {

  return (
    <div>
        <h2> Articulo: {nombre} </h2>
        <img src = {foto} alt = {nombre} />
        <h3> Tipo:  {tipo} </h3>
        <h3> Talles: {talles} </h3>
        <h3> Colores: {colores} </h3>
        <h3> Precio: {precio} </h3>
    </div>
  )
}

export default ItemDetail