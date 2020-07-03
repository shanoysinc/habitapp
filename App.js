import "react-native-gesture-handler"
import { StatusBar } from "react-native"
import { enableScreens } from "react-native-screens"
import React from "react"
import BottomTab from "./Tab/BottomTab"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./reducers/rootReducer"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-community/async-storage"
import { PersistGate } from "redux-persist/es/integration/react"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"
enableScreens() // optimize memory usage and performance
StatusBar.setBarStyle("dark-content", true)
AsyncStorage.clear()
const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	stateReconciler: hardSet,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistedStore = persistStore(store)

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistedStore}>
				<NavigationContainer>
					<BottomTab />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}
