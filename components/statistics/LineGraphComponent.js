import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import LineGraph from "@chartiful/react-native-line-graph"

const LineGraphComponent = () => {
	return (
		<LineGraph
			data={[10, 15, 7, 20]}
			width={Dimensions.get("window").width - 70}
			height={200}
			lineColor="#347975"
			dotColor="#347975"
			lineWidth={3}
			isBezier
			hasDots={true}
			baseConfig={{
				startAtZero: false,
				hasXAxisBackgroundLines: false,
				xAxisLabelStyle: {
					prefix: "$",
					offset: 0,
				},
			}}
			style={{
				margin: 20,
				padding: 10,
				paddingTop: 20,
				borderRadius: 20,
				width: Dimensions.get("window").width - 40,
				backgroundColor: `#dbf0ef`,
			}}
		/>
	)
}

export default LineGraphComponent
