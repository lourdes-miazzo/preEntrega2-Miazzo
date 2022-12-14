import React from 'react'
import { useCartContext } from '../../../context/CartContext'
import './itemCart.css'


const ItemCart = ({data}) => {
    const {removeArt, removerUnidad} = useCartContext()
    //renderizado de la info de cada obra en el carrito, junto con los botones para eliminar por unidad o eliminar completamente la obra del mismo
    const limit= data.quantity <= 0 && removeArt(data.id)
  return (
    <>
    <div className='orgItem'>
      <div className='backCardItemCart'>
          <div>
              <img  alt="" src={data.imagen} className="imgDetail"/>
          </div>
          <div className='textDesign'>
              <h3>{data.titulo}</h3>
              <p>Año: {data.anio}</p>
              <p>Cantidad: {data.quantity}</p>
              <p>Precio: ${data.precio}</p>
              <p>Subtotal: ${ data.quantity * data.precio}</p>
              <button onClick={()=> removeArt(data.id)}>Eliminar del carrito</button>
              <button disabled={limit} onClick={() => removerUnidad(data.id)}> Remover por unidad (- 1)</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemCart