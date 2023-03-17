import React from 'react'
import Productbody from '../productbody/productbody'
import Productheader from '../productheader/productheader'
import "./style.css"

function Product(props) {
  return (
    <div className='product'>
      <Productheader url={props.url}/>
      <Productbody title = {props.title} price = {props.price} countity = {props.countity}/>
    </div>
  )
}

export default Product
