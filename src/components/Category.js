import React from 'react'

export const Category = ({category}) => (
    <article className="">
        <h2>{category.name}</h2>
        <img src={'https://api.doover.tech/api' + category.picture} alt=""/>
    </article>
)