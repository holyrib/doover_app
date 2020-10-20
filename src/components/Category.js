import React from 'react'
import './Category.css'
import { useHistory } from "react-router-dom";

export const Category = ({category}) => {

    const history = useHistory();
    return (
        // <div className="categoryCard"
        //      onClick={() => history.push({
        //     pathname: '/products/' + category.uuid,
        //     category: category,
        // })}>

        <div className="categoryCard"
             onClick={() => history.push({
                 pathname: '/products/' + category.uuid,
                 category: category,
             })}>
       {/*<div className="categoryCard" onClick={() => history.push('/products/' + category.uuid)}>*/}
            <div className="container">

            <img className='categoryImg' src={'https://api.doover.tech' + category.picture} alt=""/>
                <h2>{category.name}</h2>
            </div>

        </div>
    )
};