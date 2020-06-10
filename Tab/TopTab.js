import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import Progress from "../screens/Progress"
import { color } from "../global/global"
const Tab = createMaterialTopTabNavigator()
const TopTab = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Progress Bar" component={Progress} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabContainer: {},
})

export default TopTab
