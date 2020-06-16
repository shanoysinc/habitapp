import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import habitCategoryReducer from "./habitCategoryReducer"
import habitsColorReducer from "./habitsColorReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	habitCategoryReducer,
	habitsColorReducer,
})
