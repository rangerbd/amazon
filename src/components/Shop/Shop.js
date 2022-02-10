import React, { useEffect, useState } from 'react';
import './Shop.css';
import '../Product/Product'
import Product from '../Product/Product';

const Shop = () => {

    const [products ,setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,10)));
    },[])
    return (
        <div className='shop-container'>
                <div className='product-container'>
                   
               
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
                

            </div>

            <div className='cart-container'>
                <h1>this is cart</h1>
            </div>
            
            
        </div>

      
    );
};

export default Shop;