import products from "../../services/api";

export const GET_PRODUCTS = 'GET PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
})
export const getProductsFailure = () => ({ type: GET_PRODUCTS_FAILURE })

export function fetchProducts(categoryId) {
    return async dispatch => {
        dispatch(getProducts())

        try {
            const token = localStorage.getItem('user').slice(1,-1);
            // console.log(localStorage.getItem('user'));
            const response = await products.get('/products/?category=' + categoryId, {
                // mode: 'no-cors',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                dispatch(getProductsSuccess(response.data));
            });
        } catch (error) {
            dispatch(getProductsFailure())
        }
    }
}
