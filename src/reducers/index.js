import { combineReducers } from 'redux'
import categoryReducer from './category.reducer'
import productBySlugReducer from './listBySlug.reducer'
const rootReducer = combineReducers({
  category: categoryReducer,
  bySlug: productBySlugReducer
})

export default rootReducer
