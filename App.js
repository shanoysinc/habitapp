import "react-native-gesture-handler"
import { StatusBar } from "react-native"
import { enableScreens } from "react-native-screens"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import BottomTab from "./Tab/BottomTab"
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { rootReducer } from "./reducers/rootReducer"

enableScreens() // optimize memory usage and performance
StatusBar.setBarStyle("dark-content", true)
const store = createStore(rootReducer)

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<BottomTab />
			</NavigationContainer>
		</Provider>
	)
}
