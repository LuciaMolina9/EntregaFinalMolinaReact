import { useContext } from "react"
import { ContextCart } from "../../context/ContextCart"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(ContextCart)

  return (
    <div>
        <img src={item.foto} alt={item.nombre}   />
        <h3>{item.nombre}</h3>
        <h4>Cantidad: {cantidad}</h4>
        <h4>Precio: {item.precio}</h4>
        <button onClick={()=> eliminarProducto(item.nombre)}> Eliminar producto </button>
    </div>
  )
}

export default CartItem