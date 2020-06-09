import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Home from "../components/Home"
import Progress from "../components/Progress"
import AddHabits from "../components/AddHabits"

const Tab = createMaterialBottomTabNavigator()

const BottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="purple"
			inactiveColor="#3e2465"
			barStyle={{ backgroundColor: "#fff" }}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home-outline"
							color={color}
							size={28}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="AddHabits"
				component={AddHabits}
				options={{
					tabBarLabel: "Add Habits",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="plus"
							color={color}
							size={28}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Progress"
				component={Progress}
				options={{
					tabBarLabel: "Progress",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="chart-line"
							color={color}
							size={28}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTab
