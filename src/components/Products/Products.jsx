import { useState, useEffect  } from "react"
import { db } from "../../services/config"
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore"

//Atenti al trabajar porque puse PRODUCTS, en ingles

const Products = () => {
    const [products, setProducts] = useState ([]);

    useEffect (()=> {
        const myProducts = query (collection(db, "productos"))
        getDocs (myProducts)
            .then(respuesta => {
                setProducts(respuesta.docs.map(doc=> ({id: doc.id, ...doc.data() })))
            })
    }, [products]);


const descontarStock = async (product) => {
    const productRef = doc(db,"productos", product.id);
    let newStock = product.stock - 1;

    await updateDoc (productRef, {stock: newStock});

    const updatedProducts = products.map (p => {
        if (p.id === product.id) {
            return {...p, stock: newStock};
        }
        return p;
    })
    setProducts(updatedProducts)
}



  return (
    <div>
        {/* <h2>lista desde firebase</h2>
        {
            products.map(product => (
                <div key={product.id} >
                    <h4>{product.nombre}</h4>
                    <h4>precio: ${product.precio}</h4>
                    <h4>colores: {product.colores.map(color => (<button key={color}>{color}</button>) )}</h4>
                    <h4>talles: {product.talles.map(talle => (<button key={talle}>{talle}</button>) )}</h4>
                    <h4>stock: {product.stock}</h4>
                    <button onClick={()=> descontarStock(product)}>comprar </button>
                </div>
               
            ))} */}

    </div>
  )
}

export default Products