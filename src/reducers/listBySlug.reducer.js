import { categoryConstants } from "../actions/constants"

const initState ={
    error:null,
    loading:false,
    success:false,
    slugedProduct:'',
   
}
export const productBySlugReducer=(state = initState, action)=>{
    switch(action.type){
        case categoryConstants.GET_BY_SLUG_REQUEST:
            state={
                ...state,
                loading:true,
                error:null,
                success:false,
                slugedProduct:''
            }
            break;
        case categoryConstants.GET_BY_SLUG_SUCCESS:
            state={
                ...state,
                loading:false,
                error:null,
                success:true,
                slugedProduct:action.payload
            }
            break;
        case categoryConstants.GET_BY_SLUG_FAILURE:
            state={
                ...state,
                loading:false,
                error:action.payload,
                success:false,
                slugedProduct:''
            }
            break;
        default:
    }
   
    return state
}

export default productBySlugReducer