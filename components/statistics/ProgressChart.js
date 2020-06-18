import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { ProgressChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
const ProgressChartComponent = () => {
	const data = {
		labels: ["Swim", "Bike", "Run"], // optional
		data: [0.4, 1, 0.3, 0.2],
	}
	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: (opacity = 1) => `rgb(255, 235, 59, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false, // optional
	}
	return (
		<>
			<ProgressChart
				data={data}
				width={screenWidth}
				height={140}
				strokeWidth={6}
				radius={13}
				chartConfig={chartConfig}
				hideLegend={true}
				style={styles.prograssBar}
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
export default ProgressChartComponent
