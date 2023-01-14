import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import '../styles/products.css';

const Products = () => {

  const dispatch = useDispatch();

  const [products,setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async() =>{

     const res =  await fetch('https://fakestoreapi.com/products?limit=20');
     const data = await res.json(); 
    setProducts(data);
    };
    fetchData();
},[]); 

const handleClick = (product)=>{
  dispatch(add(product));
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