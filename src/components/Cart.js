import React from "react";
import './Cart.css'
const Cart = () => {
    function countUnique(iterable) {
        return new Set(iterable).size;
    }

    const cartItem = () => {
        let products ='';
        let productsString = localStorage.getItem('products');
        if (productsString) {
            products = JSON.parse(productsString);
        }
        return products.map((product) =>
            <div className='cartCard'>
                <img className='cartImg' src={'https://api.doover.tech' + product.picture} alt=""/>
                <div className='productInfo'>
                    <h1>{product.name}</h1>
                    <p>Срок доставки: { product.duration/86400} { product.duration/86400 < 2 ? 'день' : 'дня'}</p>
                    <p>{product.price} тенге</p>
                </div>

            </div>
        );
    }
    return(
        <div>
            <h1>Корзина</h1>
            <div className='cartContainer'>
                <div>
                    {cartItem()}
                </div>
            </div>
        </div>
    )
};

export default Cart;