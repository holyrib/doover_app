import React, {useEffect, useState} from "react";
import './Product.css'
// import {addProductToCart} from "../services/cartStorage";
// import {removeProductFromCart} from "../services/cartStorage";
// import {itemsInCartCount} from "../services/cartStorage";

const Product = ({product}) => {
    const durationDays = product.duration/86400;
    const [products, setProducts] = useState([]);
    // const [itemCount, setItemCount] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        products.map(function (countProduct){
            if (product.uuid === countProduct.uuid) {
                setCount(count+1);
            }
        });
    }, []);
    useEffect(() => {
        let productsString = localStorage.getItem('products');
        if (productsString) {
            setProducts(JSON.parse(productsString));
        }
    }, [count]);



    function getProductsInCart(){
        let productsString = localStorage.getItem('products');
        if (productsString) {
            setProducts(JSON.parse(productsString));
        }
    };
    // function countItemsInCartCount() {
    //     if(product === null) return;
    //     console.log(count);
    // }

    function addProductToCart(newProduct) {
        getProductsInCart();
        const updatedProducts = products;
        updatedProducts.push(newProduct);
        // setProducts(updatedProducts => [...updatedProducts, newProduct]);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setCount(count + 1);
    }

    function removeProductFromCart(removeProduct){
        getProductsInCart();
        const index = products.map(function(x) {return x.uuid; }).indexOf(removeProduct.uuid);
        if (index == 0 || index < 0) return;
        // const objectFound = array[index];
        if (index > -1) {
            products.splice(index, 1);
            // console.log('success');
        }
        localStorage.setItem('products', JSON.stringify(products));
        setCount(count - 1);
    }

    return (
        <div className="productCard">
            <img className='productImg' src={'https://api.doover.tech' + product.picture} alt=""/>
            <div className="productContainer">
                <h4>{product.name}</h4>
                <p>Срок доставки: {durationDays} {durationDays < 2 ? 'день' : 'дня'}</p>
                <p>{product.price} тенге</p>
                <button onClick={ () => addProductToCart(product) }>+</button>
                { count }
                <button onClick={ ()=> removeProductFromCart(product) }>-</button>
            </div>

        </div>
    )
}

export default Product;