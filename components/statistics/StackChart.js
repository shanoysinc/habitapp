import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { StackedBarChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
//if the data is greater than 2 take off the first number
const StackChartComponent = () => {
	const data = {
		labels: ["Jan", "feb", "mar", "april"],

		data: [
			[6, 9, 12],
			[10, 14],
			[21, 26],
			[21, 10, 34],
		],
		barColors: ["#F8BBD0", "#F06292", "#EC407A"],
	}
	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgb(255, 64, 129, ${opacity})`,
		labelColor: (opacity = 1) => `rgb(66, 66, 66, ${opacity})`,
		strokeWidth: 3, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}
	return (
		<View style={styles.stackChart}>
			<StackedBarChart
				data={data}
				width={screenWidth}
				height={167}
				chartConfig={chartConfig}
				style={styles.chart}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	stackChart: {
		marginTop: "4%",
	},
	// chart: {
	// 	color: "white",
	// },
})
export default StackChartComponent
