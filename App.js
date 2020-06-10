import "react-native-gesture-handler"
import { enableScreens } from "react-native-screens"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import BottomTab from "./Tab/BottomTab"
import { NavigationContainer } from "@react-navigation/native"
import Provider from "react-redux"
import { createStore } from "redux"
import { rootReducer } from "./reducers/rootReducer"

enableScreens() // optimize memory usage and performance

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
