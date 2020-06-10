import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Home from "../screens/Home"
import Progress from "../screens/Progress"
import Header from "../components/Header"
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
				indicatorStyle: { backgroundColor: "#35d0ba" },
			}}
			headerMode="screen"
			screenOptions={{
				headerTitle: ({ scene, previous, navigation }) => (
					<Header
						scene={scene}
						previous={previous}
						navigation={navigation}
					/>
				),
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
