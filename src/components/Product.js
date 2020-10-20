import React from "react";
import './Product.css'
const Product = ({product}) => {
    const durationDays = product.duration/86400;
    return (
        <div className="productCard">
            <img className='productImg' src={'https://api.doover.tech' + product.picture} alt=""/>
            <div className="productContainer">
                <h4>{product.name}</h4>
                <p>Срок доставки: {durationDays} {durationDays < 2 ? 'день' : 'дня'}</p>
                <p>Цена {product.price} тенге</p>
            </div>

        </div>
    )
}

export default Product;