import Item from "../Item/item"

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map (producto => <Item key={producto.nombre} {...producto} />)
        }
    </div>
  )
}

export default ItemList
