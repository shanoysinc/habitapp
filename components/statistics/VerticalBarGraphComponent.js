import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph"

const VerticalBarGraphComponent = () => {
	return (
		<VerticalBarGraph
			data={[20, 45, 28, 80, 99, 43, 50, 28, 80, 99, 43, 50]}
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
			barWidthPercentage={0.5}
			barColor="#9575CD"
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
				backgroundColor: `#EDE7F6`,
				width: Dimensions.get("window").width - 40,
			}}
		/>
	)
}

export default VerticalBarGraphComponent
