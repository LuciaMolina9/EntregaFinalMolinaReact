import { useContext } from "react"
import { ContextCart } from "../../context/ContextCart"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'



const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(ContextCart);

    if(cantidadTotal === 0){
        return (
            <>
                <h2>El carrito de compras está vacio</h2>
                <button><Link to="/">Volver al inicio</Link></button>
            </>
        )

    }

  return (
    <div className="detalleCompra">
        <h2>Tu carrito</h2>
        {
            carrito.map(producto => <CartItem key = {producto.item.nombre} {...producto} />)
        }
        <h3>Cantidad total: {cantidadTotal}</h3>
        <h3>Precio Final: ${total}</h3>
        <button className="btnVaciar" onClick={()=> vaciarCarrito()}> Vaciar carrito </button>
        <button><Link to="/checkout"  className="btnCheckout"> Pasar por caja </Link></button>
    </div>
  )
}

export default Cart