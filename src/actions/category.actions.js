import axiosBaseUrl from '../utility/url'
import { categoryConstants } from './constants'

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_CATEGORY_REQUEST })
    const response = await axiosBaseUrl.get('/category/find', {})

    if (response.status === 200) {
      const { data } = response
      dispatch({
        type: categoryConstants.GET_CATEGORY_SUCCESS,
        payload: { data },
      })
    }
    if (response.status === 400) {
      dispatch({ type: categoryConstants.GET_CATEGORY_FAILURE })
    }
  }
}
