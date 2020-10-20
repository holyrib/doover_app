import {combineReducers} from 'redux'

import categories from './categoriesReducer'
import products from './productsReducer'

const rootReducer = combineReducers({
    categories: categories,
    products: products,
})

export default rootReducer