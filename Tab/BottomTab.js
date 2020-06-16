import React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CreateHabitStack from "./CreateHabitStack"
import Settings from "../screens/Settings"
import TopTab from "./TopTab"

const Tab = createMaterialBottomTabNavigator()

const BottomTab = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="black"
			labeled={false}
			shifting={true}
			barStyle={{ backgroundColor: "#fff", elevation: 0 }}
			shifting={true}
			tabBarAccessibilityLabel={true}
		>
			<Tab.Screen
				name="Home"
				component={TopTab}
				options={{
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
				component={CreateHabitStack}
				options={{
					// tabBarLabel: "Create Habits",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="plus-circle"
							color={color}
							size={37}
							style={{ marginTop: -10, marginLeft: -10 }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					// tabBarLabel: "Settings",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="settings"
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
