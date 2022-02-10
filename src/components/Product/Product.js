import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">

        <div className="image-container">
            <img src={props.product.img}/>
        </div>

        <div className="prod">
            <h4>{props.product.name}</h4>
            <br/>
            <p><small>{props.product.seller}</small></p>
            <p><small>{props.product.price}</small></p>
            <h5>only <bold>{props.product.stock}</bold> left in stock</h5>
            <button>Add to cart</button>
        </div>

        </div>
        
    );
};

export default Product;