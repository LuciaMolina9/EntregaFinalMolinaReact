import { useState, useEffect  } from "react"
import { db } from "../../services/config"
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore"


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
       
    </div>
  )
}

export default Products