import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';
import Cart from '../images/cart.png'

const Navbar = () =>{
const items = useSelector((state)=>state.cart);

  return (
    <div className='navbar'>
      <span className="logo">PHOTON STORE</span>
      <div className="links">
        <Link className="navlinks" to='/'>Home</Link>
        <Link className="navlinks" to='/cart'> <div className="cart"><img src={Cart} alt="cart" /> {(items.length > 0)?<><span>{(items.length > 9)?'9+':items.length}</span></>:''}</div></Link>
       
            
           </div>
    </div>
  )
}

export default Navbar
