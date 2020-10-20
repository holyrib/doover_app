import React, {useEffect} from "react";
import {fetchCategories} from "../store/actions/categoriesActions";
import {connect} from 'react-redux'
import {Category} from "./Category";
import './Main.css';

const Main = ({dispatch, loading, categories, hasErrors}) => {
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const renderCategories = () => {
        if (loading) return <p>Категории загружаются...</p>
        if (hasErrors) return <p>Произошла ошибка, перезагрузите страницу :(</p>
        if (typeof categories === 'undefined') return <p>упс</p>;
        return (
            <div className='category'>
                {categories.map(category => <Category key={category.id} category={category}/>)}
            </div>
        )
    }
    return (
        <section>
            <h1>Категории</h1>

            {renderCategories()}
        </section>
    );

}

const mapStateToProps = (state) => ({
    loading: state.categories.loading,
    categories: state.categories.categories,
    hasErrors: state.categories.hasErrors,
})

export default connect(mapStateToProps)(Main);