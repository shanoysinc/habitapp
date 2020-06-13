import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import Progress from "../screens/Progress"
import Calender from "../components/Calender"

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
					textTransform: "capitalize",
				},
				tabStyle: { height: 100 },
				style: { backgroundColor: "#6200ee" },
				indicatorStyle: { backgroundColor: "#fff", height: 4 },
			}}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Calender" component={Calender} />
			<Tab.Screen name="Statistics" component={Progress} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabContainer: {},
})

export default TopTab
