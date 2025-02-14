import { useContext } from "react"
import { ContextCart } from "../../context/ContextCart"
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";



const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(ContextCart);

    if(cantidadTotal === 0){
        return (
            <>
                <h2>El carrito de compras está vacio</h2>
                <Link to="/">Volver al inicio</Link>
            </>
        )

    }

  return (
    <div>
        {
            carrito.map(producto => <CartItem key = {producto.item.nombre} {...producto} />)
        }

        <h3>Cantidad total: {cantidadTotal}</h3>
        <h3>Precio Final: ${total}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar carrito </button>
        <Link to="/checkout"> Pasar por caja </Link>


    </div>
  )
}

export default Cart