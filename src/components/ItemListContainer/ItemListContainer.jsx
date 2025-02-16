import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams ();


  useEffect ( ()=> {
    const myProducts = idCategoria ? query (collection(db,"productos"), where("tipo", "==", idCategoria)) : collection (db, "productos");
    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map (doc => {
          const data = doc.data();
          return {id: doc.id, ...data}
        }); 
        setProductos(newProducts);
      })
      .catch((error)=> console.log (error))

  }, [idCategoria])



  return (
    <div>
      <h1>Lista de productos</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer