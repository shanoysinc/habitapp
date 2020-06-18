import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
const BezierChartComponent = () => {
	const data = {
		labels: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Friday",
			"Saturday",
		],
		datasets: [
			{
				data: [2, 0, 6, 100, 12, 12, 10, 100, 56, 21],
			},
		],
		// legend: ["Rainy Days", "Sunny Days", "Snowy Days"], // optional
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
		<>
			<LineChart
				// segments={3}
				withVerticalLabels={false}
				withInnerLines={false}
				data={data}
				width={screenWidth}
				height={240}
				verticalLabelRotation={16}
				chartConfig={chartConfig}
				bezier
				style={styles.bezieChart}
			/>
		</>
	)
}
const styles = StyleSheet.create({
	bezieChart: {
		marginTop: "8%",
	},
})
export default BezierChartComponent
