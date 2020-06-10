import "react-native-gesture-handler"
import { enableScreens } from "react-native-screens"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import BottomTab from "./Tab/BottomTab"
import { NavigationContainer } from "@react-navigation/native"

enableScreens() // optimize memory usage and performance

export default function App() {
	return (
		<NavigationContainer>
			<BottomTab />
		</NavigationContainer>
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
