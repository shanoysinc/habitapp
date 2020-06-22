import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { ProgressChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
const ProgressChartComponent = () => {
	const data = {
		// labels: ["Swim", "Bike", "Run"], // optional
		data: [0.76],
	}
	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 2) => `rgb(40, 53, 147, ${opacity})`,
		strokeWidth: 3, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}
	return (
		<>
			<ProgressChart
				data={data}
				width={screenWidth}
				height={140}
				strokeWidth={4}
				radius={26}
				chartConfig={chartConfig}
				hideLegend={true}
				style={styles.prograssBar}
			/>
		</>
	)
}
const styles = StyleSheet.create({
	prograssBar: {
		marginTop: "24%",
		marginLeft: "-62%",
		position: "absolute",
		zIndex: 10,
	},
})
export default ProgressChartComponent
