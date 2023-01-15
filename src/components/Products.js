import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import {STATUSES} from '../store/productSlice'
import '../styles/products.css';


const Products = () => {

  const dispatch = useDispatch();
  const{data:products,status} = useSelector((state)=>state.product)
  // const [products,setProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchData = async() =>{

    //  const res =  await fetch('https://fakestoreapi.com/products?limit=20');
    //  const data = await res.json(); 
    // setProducts(data);
    // };
    // fetchData();
},[]); 

const handleClick = (product)=>{
  dispatch(add(product));
}

if(status === STATUSES.LOADING)
{
  return <h2 style={{textAlign: 'center'}}>Loading...</h2>
}
if(status === STATUSES.ERROR)
{
  return <h2 style={{textAlign: 'center'}}>Something went wrong</h2>
}
  return (
    <div className='products'>
 
  <h1 className="heading">Our Collections</h1>
    <div className="items">
     
    {
      products.map((product) => (
        <div className='item' key={product.id}>
            
        <img src={product.image} alt="image" />
     
        <div className="itemTitle">{(product.title.length > 50)?product.title.slice(50):product.title}      </div>
   
        <span className='price'>$ {product.price}</span>
        
        <button className='btn' onClick={()=>handleClick(product)}>Add to Cart</button>
        </div>
      ))
    }
     </div>
 </div>
  
  )
}

export default Products