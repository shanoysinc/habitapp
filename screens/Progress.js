import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colorBg } from "../global/global"
import BezierChartComponent from "../components/statistics/BezierChart"
import { Title } from "react-native-paper"
import StackChartComponent from "../components/statistics/StackChart"
const Progress = () => {
	return (
		<View style={colorBg}>
			<Title style={styles.textTitle}>Overall Progress</Title>
			<StackChartComponent />
			<Title style={styles.textTitle}>Learn to code</Title>
			<BezierChartComponent />
		</View>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
		color: "#424242",
	},
})
export default Progress
