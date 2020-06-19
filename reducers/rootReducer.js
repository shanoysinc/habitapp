import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import habitCategoryReducer from "./habitCategoryReducer"
import habitsColorReducer from "./habitsColorReducer"
import progressRefreshReducer from "./progressRefreshReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	habitCategoryReducer,
	habitsColorReducer,
	progressRefreshReducer,
})
