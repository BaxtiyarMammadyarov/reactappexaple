import React from 'react'
import "./style.css"
function Productbody(props) {
  let str =  props.price;
  console.log(str.substring(1))
  return (
    <div className={props.countity == 0 ? "red-class":""}>
      <p>Title : {props.title}</p>
      <p  >Price : {props.price}</p>
      <p  > Countity  : {props.countity}</p>
    </div>
  )
}

export default Productbody
