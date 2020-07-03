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
					fontSize: 16,
					marginTop: 40,
					fontWeight: "bold",

					textTransform: "capitalize",
				},
				tabStyle: { height: 85 },
				// style: { backgroundColor: "rgb(105, 126, 240)" }, // blue top bar

				indicatorStyle: {
					backgroundColor: "black",
					height: 1,
					width: 40,
					marginLeft: "15%",
				},
			}}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Statistics" component={Progress} />
			{/* <Tab.Screen name="Calender" component={Calender} /> */}
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	tabContainer: {},
})

export default TopTab
