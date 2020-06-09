import "react-native-gesture-handler"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./components/Home"
import Progress from "./components/Progress"
import AddHabits from "./components/AddHabits"
import Settings from "./components/Settings"
import Feather from "@expo/vector-icons/Feather"
const Tab = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						let iconName

						if (route.name == "Home") {
							iconName = "home"
						} else if (route.name == "Progress") {
							iconName = "trending-up"
						} else if (route.name == "AddHabits") {
							iconName = "check-circle"
						} else if (route.name == "Settings") {
							iconName = "settings"
						}

						return (
							<Feather
								name={iconName}
								size={size}
								color={color}
							/>
						)
					},
				})}
				tabBarOptions={{
					activeTintColor: "purple",
					inactiveTintColor: "gray",
				}}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Progress" component={Progress} />
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
