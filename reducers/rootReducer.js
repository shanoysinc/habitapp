import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import habitCategoryReducer from "./habitCategoryReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	habitCategoryReducer,
})
