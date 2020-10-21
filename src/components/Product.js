import React, {useEffect, useState} from "react";
import './Product.css'
// import {addProductToCart} from "../services/cartStorage";
// import {removeProductFromCart} from "../services/cartStorage";
// import {itemsInCartCount} from "../services/cartStorage";

const Product = ({product}) => {
    const durationDays = product.duration/86400;
    const [products, setProducts] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [changeCart, setChangeCart] = useState(true);

    function getProductsInCart(){
        let productsString = localStorage.getItem('products');
        if (productsString) {
            setProducts(JSON.parse(productsString));
        }
        countItemsInCartCount();
    };
    function countItemsInCartCount() {
        if(product === null) return;
        let count = 0;
        products.map(function (countProduct){
            if (product.uuid === countProduct.uuid) {
                count++;
            }
        })
        console.log(count);
        if(count < 0) setItemCount(0);
        setItemCount(count);
    }

    function addProductToCart(newProduct) {
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        getProductsInCart();
        setChangeCart(!changeCart);
        console.log('hi')
    }

    function removeProductFromCart(removeProduct){
        const index = products.map(function(x) {return x.uuid; }).indexOf(removeProduct.uuid);
        // const objectFound = array[index];
        if (index > -1) {
            products.splice(index, 1);
            console.log('success');
        }
        localStorage.setItem('products', JSON.stringify(products));
        getProductsInCart()
        setChangeCart(!changeCart);

    }

    return (
        <div className="productCard">
            <img className='productImg' src={'https://api.doover.tech' + product.picture} alt=""/>
            <div className="productContainer">
                <h4>{product.name}</h4>
                <p>Срок доставки: {durationDays} {durationDays < 2 ? 'день' : 'дня'}</p>
                <p>{product.price} тенге</p>
                <button onClick={ () => {addProductToCart(product)} }>+</button>
                { itemCount }
                <button onClick={ ()=> {removeProductFromCart(product)} }>-</button>
            </div>

        </div>
    )
}

export default Product;