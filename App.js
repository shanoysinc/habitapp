import "react-native-gesture-handler"
import { StatusBar } from "react-native"
import { enableScreens } from "react-native-screens"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import BottomTab from "./Tab/BottomTab"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./reducers/rootReducer"
import thunk from "redux-thunk"
enableScreens() // optimize memory usage and performance
StatusBar.setBarStyle("dark-content", true)
const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<BottomTab />
			</NavigationContainer>
		</Provider>
	)
}
