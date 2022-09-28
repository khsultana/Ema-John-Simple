import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'




const Shop = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const [cart, setCart] = useState([])
    const addToCarTHandle = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log('Clicked', product)
    }


    return (
        <div className='Product-Container'>
            <div className="Product-Item">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCarTHandle={addToCarTHandle}
                    ></Product>)
                }
            </div>
            <div className="Summary-Container">

                <h4>Order Summary </h4>
                <p>Selected :   {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;