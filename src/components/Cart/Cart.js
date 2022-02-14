import React from 'react';
import Product from '../Product/Product';

const  Cart= (props) => {
    const cart=props.cart;
    let total=0;

    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }

    let shiping=0;

    if(total>40){
        shiping=5;
    }
    else if(total>12){
        shiping=20;
    }
    else{
        shiping=0
    }

    let Tax=((total+shiping)/7.5).toFixed(2);

    const grandTotal=(total+shiping+ Number(Tax)).toFixed(2)
    return (
        <div>
            <h1>Order Summery</h1>
                <h4>items ordered : {cart.length}</h4>
                <small>shiping cost :{shiping}</small><br/>
                <small>Tax :{Tax}</small>
                <h2>total :{grandTotal}</h2>
        </div>
    );
};

export default Cart;