import React,{useState} from 'react';
import { Link } from 'react-router-dom'

import {cartCount} from '../Data'
import './index.css'



const NavBar = ()=>{
  let [data,setDate] = useState(cartCount.count)

  return(
    <div className="navbar-container">
      <nav>
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/checkout" className="cart">
            Cart
              <span className="cart-counter">
                {data}
                </span>
            </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
