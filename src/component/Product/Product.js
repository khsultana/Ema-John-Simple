import React from 'react';
import './Product.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Product = (props) => {
    console.log(props)
    const { img, name, price, ratings, seller } = props.product
    return (
        <div className='product-items'>
            <img src={img} alt="" />



            <div className='text-Sec'>
                <p>Name : {name}</p>
                <p>Price : $ {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>

            <button onClick={() => props.addToCarTHandle(props.product)} className='btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;