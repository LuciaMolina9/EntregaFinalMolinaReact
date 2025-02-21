import { useContext } from "react"
import { ContextCart } from "../../context/ContextCart"
import './CartItem.css'


const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(ContextCart)

  return (
    <div className="objetoCart">
      <img className="fotoCart" src={item.foto} alt={item.nombre} />
      <div className="infoCart">
        <h3>{item.nombre}</h3>
        <h4>Cantidad: {cantidad}</h4>
        <h4>Precio: {item.precio}</h4>
        <button className="btnEliminar" onClick={() => eliminarProducto(item.nombre)}> Eliminar producto </button>
      </div>
    </div>
  )
}

export default CartItem