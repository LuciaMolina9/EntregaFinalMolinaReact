import React from 'react'
import { useState } from 'react'

const ItemCount = ( { inicial, stock, funcionAgregar } ) => {

    const [contador, setContador] = useState (inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador (contador + 1);
        }};
    
    const restarContador = () => {
        if (contador > inicial) {
            setContador (contador -1);
        }};    


  return (
    <div>
        <button onClick = {sumarContador}> + </button>
        <p> {contador} </p>
        <button onClick = {restarContador}> - </button> 
        <button onClick = {() => funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount