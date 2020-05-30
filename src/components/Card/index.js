import React,{ useState } from 'react';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import './index.css';
import {cartCount} from '../Data'


const Card = (props)=>{
  let [cart,setCart]= useState(true)
  let {name,img} = props.info

  const changeState = ()=>{
    if(cart){
      setCart(false)
      cartCount.increment()
    
    }else{
      setCart(true)
      cartCount.decrement()

    }
  }

  return(
    <div className='card'>
      <img src={img} alt="box"></img>
      <div className="card-container">
        <h4>
          {name}
        </h4>
        <button className="card-button" onClick={()=>changeState()}>
          {cart ? <AddShoppingCartTwoToneIcon/> : <RemoveShoppingCartIcon/> }
        </button>
      </div>

    </div>
  )
}

export default Card
