import React from 'react'

export const Category = ({category}) => (
    <article className="">
        <h2>{category.name}</h2>
        <img src={'https://api.doover.tech' + category.picture} alt=""/>
    </article>
)