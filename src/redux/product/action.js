import { message } from 'antd';
import axios from '../axios'
import { getCategoriesFailed, getCategoriesStart, getCategoriesSuccess, getProductsFailed, getProductsStart, getProductsSuccess, getSingleProductSuccess, getSingleProductFailed, getAllProductSuccess } from './reducer';

// Get all categories
export const getCategories = async (dispatch) => {
    dispatch(getCategoriesStart());
    try {
        const res = await axios.get("/v1/products/get-all-categories")
        dispatch(getCategoriesSuccess(res.data));
    } catch (err) {
        dispatch(getCategoriesFailed())
        message.error({
            title: "Get Categories Failed",
            content: err.response.data.message
        })
    }
}

//get product by category
export const getProducts= async (dispatch, category) => {
    dispatch(getProductsStart());
    try {
        const res = await axios.get(`/v1/products?category=${category}`)
        dispatch(getProductsSuccess(res.data));
        console.log(res.data);
    }
    catch (err) {
        dispatch(getProductsFailed());
    }
}

export const getSingleProduct = async (dispatch, id) => {
    try{
        const res = await axios.get(`/v1/products/${id}`)
        dispatch(getSingleProductSuccess(res.data))
    }
    catch (error){
        dispatch(getSingleProductFailed())
    }
}

export const getAllProducts= async (dispatch, nav) => {
    dispatch(getProductsStart());
    try {
        const res = await axios.get('/v1/products')
        dispatch(getAllProductSuccess(res.data));
        nav('/admin/productlist')
        console.log(res.data);
    }
    catch (err) {
        message.error({
            title: "Get all Product failed",
            content: error.response.data.message,
          });
    }
}

export const getProductsPageSize= async (dispatch, page, size) => {
    try {
      const res = await axios.get(`/v1/products?page=${page}&size=${size}`);
      dispatch(getAllProductSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get all Product for page failed",
            content: error.response.data.message,
          });
    }
}
