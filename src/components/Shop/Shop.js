import React, { useEffect, useState } from 'react';
import './Shop.css';
import '../Product/Product'
import Product from '../Product/Product';

const Shop = () => {

    const [products ,setProducts] = useState([]);
    const[cart, setCart] =useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data.slice(20,30)));
    },[])

    const handleaddProduct = (product) =>{
        console.log("clicked",product);
        const newcart = [...cart , product];
        setCart(newcart);
    }

    return (
        <div className='shop-container'>
                <div className='product-container'>
                   
               
                {
                    products.map(pd => <Product handleaddProduct={handleaddProduct} product={pd}></Product>)
                }
                

            </div>

            <div className='cart-container'>
                <h1>Order Summery</h1>
                <h4>items ordered : {cart.length}</h4>
            </div>
            
            
        </div>

      
    );
};

export default Shop;