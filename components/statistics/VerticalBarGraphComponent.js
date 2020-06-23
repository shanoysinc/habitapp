import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph"

const VerticalBarGraphComponent = () => {
	return (
		<VerticalBarGraph
			data={[0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0]}
			labels={[
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sept",
				"Oct",
				"Nov",
				"Dec",
			]}
			width={Dimensions.get("window").width - 30}
			height={200}
			barRadius={4}
			barWidthPercentage={0.3}
			barColor="#7C4DFF"
			baseConfig={{
				hasXAxisBackgroundLines: false,
				xAxisLabelStyle: {
					position: "right",
					// prefix: "$",
					fontSize: 11,
				},
				yAxisLabelStyle: {
					fontSize: 11,
				},
			}}
			style={{
				margin: 20,
				padding: 10,
				paddingTop: 20,
				borderRadius: 20,
				backgroundColor: `#EEEEEE`,
				width: Dimensions.get("window").width - 40,
			}}
		/>
	)
}

export default VerticalBarGraphComponent
