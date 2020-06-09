import "react-native-gesture-handler"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./components/Home"
import Progress from "./components/Progress"
import AddHabits from "./components/AddHabits"
import Settings from "./components/Settings"

const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Progess" component={Progress} />
				<Tab.Screen name="AddHabits" component={AddHabits} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
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
