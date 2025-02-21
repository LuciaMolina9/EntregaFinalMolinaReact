import { useState, createContext } from "react"


export const ContextCart = createContext ({
    carrito : [],
    total : 0, //precio
    cantidadTotal: 0 //unidades o pares en nuestro caso
})

export const CartProvider = ({children}) => {
    let [carrito, setCarrito] = useState ([]);
    let [total, setTotal] = useState (0);
    let [cantidadTotal, setCantidadTotal] = useState (0);

    const agregarCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.nombre === item.nombre);

        if (!productoExistente) {
            setCarrito(prev =>  [...prev, {item,cantidad}]);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev=> prev + (item.precio*cantidad));
        } 
        else {
            const carritoActualizado = carrito.map (prod => {
                if(prod.item.nombre === item.nombre){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                }
                else{
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev=> prev + (item.precio*cantidad));
        }
    }

    const eliminarProducto = (nombre) => {
        //referencia de producto a eliminar 
        let productoEliminado = carrito.find(prod => prod.item.nombre === nombre);

        //eliminacion del producto en si
        let carritoActualizado = carrito.filter(prod => prod.item.nombre !== nombre);
        setCarrito (carritoActualizado);

        //reduccion de precio y cantidad despues de eliminar
        setCantidadTotal (prev => prev - productoEliminado.cantidad);
        setTotal (prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    const vaciarCarrito = () => {
        setCarrito ([]);
        setCantidadTotal (0);
        setTotal(0);
    }

    return (
        <ContextCart.Provider value={{carrito, total, cantidadTotal, vaciarCarrito, eliminarProducto, agregarCarrito}}>
            {children}
        </ContextCart.Provider>
      )

}

export const contextCart = () => {
  
}

export default ContextCart