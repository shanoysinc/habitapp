import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import selectedCategoryReducer from "./SelectedCategoryReducer"
import creatingHabit from "./creatingHabitReducer"
import habitCategoryReducer from "./habitCategoryReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	selectedCategoryReducer,
	creatingHabit,
	habitCategoryReducer,
})
