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
				data: [2, 0, 6, 9, 12, 12],
			},
		],
		// legend: ["Rainy Days", "Sunny Days", "Snowy Days"], // optional
	}
	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgb(63, 81, 181, ${opacity})`,
		labelColor: (opacity = 1) => `rgb(33, 33, 33, ${opacity})`,
		strokeWidth: 3, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}
	return (
		<>
			<LineChart
				segments={3}
				withInnerLines={false}
				data={data}
				width={screenWidth}
				height={240}
				verticalLabelRotation={16}
				chartConfig={chartConfig}
				bezier
			/>
		</>
	)
}
const styles = StyleSheet.create({
	prograssBar: {
		marginTop: "-6%",
		marginLeft: "40%",
		position: "absolute",
	},
})
export default BezierChartComponent
