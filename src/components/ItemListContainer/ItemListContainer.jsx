import { useState, useEffect } from "react";
import { getProductos, getCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams ();


  useEffect ( ()=> {
    const funcionProductos = idCategoria ? getCategoria : getProductos;
      funcionProductos (idCategoria)
        .then (respuesta => setProductos (respuesta)) 
  }, [idCategoria])

  return (
    <div>
      <h1>Lista de productos</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer