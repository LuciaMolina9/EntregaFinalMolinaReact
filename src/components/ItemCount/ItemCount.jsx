import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

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
    <div className='contadores'>
        <button className='elmCont' onClick = {sumarContador}> + </button>
        <p> {contador} </p>
        <button className='elmCont' onClick = {restarContador}> - </button> 
        <button className='btnAgregar' onClick = {() => funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount