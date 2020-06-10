import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import Progress from "../screens/Progress"
import { color } from "../global/global"
const Tab = createMaterialTopTabNavigator()
const TopTab = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				labelStyle: {
					fontSize: 17,
					marginTop: 55,
					fontWeight: "bold",
				},
				tabStyle: { height: 100 },
				style: { backgroundColor: "#beebe9" },
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				style={styles.tabContainer}
			/>
			<Tab.Screen
				name="Progress Bar"
				component={Progress}
				style={styles.tabContainer}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabContainer: {
		marginTop: 10,
	},
})

export default TopTab
