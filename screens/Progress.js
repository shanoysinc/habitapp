import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colorBg } from "../global/global"
import BezierChartComponent from "../components/statistics/BezierChart"
import { Title } from "react-native-paper"
import PieChartComponent from "../components/statistics/PieChart"
const Progress = () => {
	return (
		<View style={colorBg}>
			<Title style={styles.textTitle}>Overall Progress</Title>
			<PieChartComponent />
			<BezierChartComponent />
		</View>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 20,
	},
})
export default Progress
