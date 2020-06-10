import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import selectedCategory from "./habitCategoryReducer"
import creatingHabit from "./creatingHabitReducer"

export const rootReducer = combineReducers({
	habitListReducer,
	selectedCategory,
	creatingHabit,
})
