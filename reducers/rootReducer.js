import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import habitCategoryReducer from "./habitCategoryReducer"
import habitsColorReducer from "./habitsColorReducer"
import progressRefreshReducer from "./progressRefreshReducer"
import currentDateReducer from "./currentDateReducer"
import statisticsReducer from "./statisticsReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	habitCategoryReducer,
	habitsColorReducer,
	progressRefreshReducer,
	currentDateReducer,
	statisticsReducer,
})
