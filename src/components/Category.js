import React from 'react'
import './Category.css'
export const Category = ({category}) => (
    <div className="categoryCard">
        <img className='categoryImg' src={'https://api.doover.tech' + category.picture} alt=""/>
        <div className="container">
            <h2>{category.name}</h2>
        </div>

    </div>
)