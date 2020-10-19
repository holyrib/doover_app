import React, {useEffect, useState} from "react";
import {fetchCategories} from "../store/actions/categoriesActions";
import {connect} from 'react-redux'
import {Category} from "./Category";

const Main = ({dispatch, loading, categories, hasErrors}) => {

    // useEffect(() => {
    //     const token = localStorage.getItem('user').slice(1,-1);
    //     console.log(localStorage.getItem('user'));
    //     const response = products.get('products/categories/', {
    //         // mode: 'no-cors',
    //         headers: {
    //             "Authorization": `Bearer ${token}`,
    //             // 'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => {
    //         console.log(response.data);
    //     });
    // }, []);
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const renderCategories = () => {
        if (loading) return <p>Категории загружаются...</p>
        if (hasErrors) return <p>Произошла ошибка, перезагрузите страницу :(</p>
        return categories.map((category) => <Category key={category.id}  category={category}/>)
    }

    return (
        <section>
            <h1>Категории</h1>
            {renderCategories()}
        </section>
    );

}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(Main);