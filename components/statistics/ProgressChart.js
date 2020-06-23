import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { ProgressChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
const ProgressChartComponent = ({ style, strokeWidth, radius, height }) => {
	const data = {
		// labels: ["Swim", "Bike", "Run"], // optional
		data: [0.76],
	}
	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 2) => `rgb(179, 157, 219, ${opacity})`,
		strokeWidth: 3, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}
	return (
		<>
			<ProgressChart
				data={data}
				width={screenWidth}
				height={height}
				strokeWidth={strokeWidth}
				radius={radius}
				chartConfig={chartConfig}
				hideLegend={true}
				style={style}
			/>
		</>
	)
}
// const styles = StyleSheet.create({
// 	prograssBar: {
// 		marginTop: "24%",
// 		marginLeft: "-62%",
// 		position: "absolute",
// 		zIndex: 10,
// 	},
// })
export default ProgressChartComponent
