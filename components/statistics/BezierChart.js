import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"

const screenWidth = Dimensions.get("window").width
const BezierChartComponent = (props) => {
	const bezierData = props.bezierData
	const data = {
		datasets: bezierData,
	}

	let strColor = props.color
	strColor = strColor.slice(0, -1)

	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0.5,
		color: () => `${strColor})`,
		labelColor: () => `rgb(66, 66, 66)`,
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
