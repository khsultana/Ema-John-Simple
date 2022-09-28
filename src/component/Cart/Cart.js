import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className='cart'>


            <h4>Order Summary </h4>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>

        </div>
    );
};

export default Cart;