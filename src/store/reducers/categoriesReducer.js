import * as actions from '../actions/categoriesActions'

export const initialState = {
        categories: [],
        loading: false,
        hasErrors: false,
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_CATEGORIES:
            return {...state, loading: true}
        case actions.GET_CATEGORIES_SUCCESS:
            return {categories: action.payload, loading: false, hasErrors: false}
        case actions.GET_CATEGORIES_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}
