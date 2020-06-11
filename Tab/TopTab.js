import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import Progress from "../screens/Progress"

const Tab = createMaterialTopTabNavigator()

const TopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				labelStyle: {
					fontSize: 15,
					marginTop: 62,
					fontWeight: "bold",
					color: "#fff",
				},
				tabStyle: { height: 100 },
				style: { backgroundColor: "#9733EE" },
				indicatorStyle: { backgroundColor: "#fff", height: 4 },
			}}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Progress Bar" component={Progress} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabContainer: {},
})

export default TopTab
