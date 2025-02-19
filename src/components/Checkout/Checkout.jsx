import { useState, useEffect, useContext } from 'react'
import { db } from '../../services/config'
import { ContextCart } from '../../context/ContextCart'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

import './Checkout.css'

const Checkout = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(ContextCart);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [repetirEmail, setRepetirEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const manejadorForm = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !repetirEmail)
        {
            setError("Todos los campos son requeridos");
            return;
        }

        if (email !== repetirEmail)
        {
            setError("El email no coincide con el email de confirmación");
            return;
        }    
            const order = {
                items: carrito.map(producto=> ({
                    articulo: producto.item.nombre,
                    cantidad: producto.cantidad,
                    //si solucionamos talle/color, VA ACA
                })),
                cantidadTotal: cantidadTotal,
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono,
                email
            }
        
        console.log(order);
        addDoc (collection(db, "orders"), order)
            .then (docRef=> {
                setOrderId(docRef.id);
                vaciarCarrito();

            })    
            .catch (error =>{
                setError ("Hubo un error procesando la compra")
            })

    }


  return (
    <div>
        <form onSubmit={manejadorForm}>
        <div>
        <label htmlFor="">Nombre: </label>
        <input type="text" onChange={(e)=>  setNombre(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="">Apellido: </label>
        <input type="text" onChange={(e)=>  setApellido(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="">Teléfono</label>
        <input type="text" onChange={(e)=>  setTelefono(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="">Email: </label>
        <input type="email" onChange={(e)=>  setEmail(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="">Repetir Email: </label>
        <input type="email" onChange={(e)=>  setRepetirEmail(e.target.value)}/>
        </div>

        {
            error && <h4>{error}</h4>
        }

        <button type="submit">Finalizar orden</button>

        {
            orderId && (<h3>¡Gracias por tu compra! Tu número de orden es {orderId}</h3>)
        }

        </form>
    </div>
  )
}

export default Checkout