import React from 'react'
import '../styles/cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';



const Cart = () => {
  const dispatch = useDispatch();
const cartItems = useSelector((state)=>state.cart)
let i = 0;
let totalprice = 0;
const handleRemove = (productId)=>{
dispatch(remove(productId));
}

  return (
    <div className='mycart'>
      <div className="heading">
          <h3>My cart</h3>
      </div>
   
      <div className="cartTable">
       
       
          
          {
            (cartItems.length===0)?'Cart is empty':
          cartItems.length && cartItems.map(cartItem=>(
           <div className="item">
            <table>
              <tr>
               <input type="hidden" value={totalprice+= cartItem.price} />
              <td><span>{++i}</span></td>
              <td><img src={cartItem.image} alt="" /></td>
              <td><h4>{cartItem.title}</h4></td>
              <td><div className="price" style={{fontWeight: 'bold'}}>${cartItem.price}</div></td>
              <td><button onClick={()=>{handleRemove(cartItem.id)}}>Remove</button></td>
            </tr>
           </table>
           
           
           </div>
          ))
          }
        
         
          {cartItems.length === 0 ?'':<> <hr /><div className="total">Total : {parseInt(totalprice)}</div></>}
        
      </div>
    </div>
  )
}

export default Cart
