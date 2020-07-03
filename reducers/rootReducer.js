import { combineReducers } from "redux"
import habitListReducer from "./habitListReducer"
import habitCategoryReducer from "./habitCategoryReducer"
import habitsColorReducer from "./habitsColorReducer"
import progressRefreshReducer from "./progressRefreshReducer"
import currentDateReducer from "./currentDateReducer"
import statisticsReducer from "./statisticsReducer"
import productiveDayReducer from "./productiveDayReducer"
import { persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage"

const habitListConfig = {
	key: "habits",
	storage: AsyncStorage,
}

const progressRefreshConfig = {
	key: "progress",
	storage: AsyncStorage,
}

const currentDateConfig = {
	key: "currentDate",
	storage: AsyncStorage,
}

const statisticsConfig = {
	key: "stats",
	storage: AsyncStorage,
}

const productiveDayConfig = {
	key: "productiveDay",
	storage: AsyncStorage,
}
export const rootReducer = combineReducers({
	habitListReducer,
	progressRefreshReducer,
	currentDateReducer,
	statisticsReducer,
	productiveDayReducer,
	habitCategoryReducer,
	habitsColorReducer,
})
