import React from "react"
import { StyleSheet, Text, View } from "react-native"
import HabitList from "../components/HabitList"
import { colorBg } from "../global/global"

const Home = () => {
	return (
		<View style={colorBg}>
			<HabitList />
		</View>
	)
}

export default Home
