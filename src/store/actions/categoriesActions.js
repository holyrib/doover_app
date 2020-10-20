import products from "../../services/products";
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE'

export const getCategories = () => ({
    type: GET_CATEGORIES,
})

export const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
})

export const getCategoriesFailure = () => ({
    type: GET_CATEGORIES_FAILURE,
})

export function fetchCategories() {
    return async (dispatch) => {
        dispatch(getCategories())

        try {
            const token = localStorage.getItem('user').slice(1,-1);
            // console.log(localStorage.getItem('user'));
            const response = await products.get('products/categories/', {
                // mode: 'no-cors',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    // 'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log(response.data)
                dispatch(getCategoriesSuccess(response.data));
            });
        } catch (error) {
            dispatch(getCategoriesFailure())
        }
    }
}