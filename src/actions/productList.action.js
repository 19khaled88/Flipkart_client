import axiosBaseUrl from "../utility/url"
import { categoryConstants } from "./constants"


export const getProductsBySlug=(slug)=>{
    return async (dispatch)=>{
        dispatch({type:categoryConstants.GET_BY_SLUG_REQUEST})
        const res = await axiosBaseUrl.get(`/product/${slug}`)
        
        if(res.status === 200){
            const {products,productByPrice} = res.data 
            
            dispatch({
                type:categoryConstants.GET_BY_SLUG_SUCCESS,
                payload:{products,productByPrice}
            })
        }
        if(res.status === 400){
            dispatch({
                type:categoryConstants.GET_BY_SLUG_FAILURE,
                payload:'No product found for this category'
            })
        }
    }
}