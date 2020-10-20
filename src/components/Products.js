import React, {useEffect, useState} from 'react'
import Product from "./Product";
import { connect } from 'react-redux'

import {fetchProducts, getProductsCategory} from '../store/actions/productsActions'
import {Category} from "./Category";


const Products = ({dispatch, products, hasErrors, loading, category}) => {
    useEffect(() => {
        console.log(category.location.category.uuid);
        // console.log(dispatch);
        const selectedCategory = category.location.category.uuid;


        dispatch(fetchProducts(selectedCategory));
    }, [dispatch])

    const renderProducts= () => {
        if (typeof products === 'undefined') return <p>упс</p>;
        if (loading.products) return <p>Loading comments...</p>
        if (hasErrors.products) return <p>Unable to display comments.</p>
        return products.map(product => (
            <Product key={product.id} product={product}/>
        ))
    }
    return (
        <section>
            <h1>вставь категорию</h1>
            {renderProducts()}
        </section>
    )
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.products.loading,
    products: state.products.products,
    hasErrors: state.products.hasErrors,
    category: ownProps,
})

export default connect(mapStateToProps)(Products);

