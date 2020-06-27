import React, { useEffect } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph"

const HorizontalBarGraphComponent = ({ data }) => {
	return (
		<HorizontalBarGraph
			data={[
				data.Saturday,
				data.Friday,
				data.Thursday,
				data.Wednesday,
				data.Tuesday,
				data.Monday,
				data.Sunday,
			]}
			labels={["Sat", "Fri", "Thurs", "Wed", "Tues", "Mon", "Sun"]}
			width={Dimensions.get("window").width - 70}
			height={220}
			barRadius={2}
			barWidthPercentage={0.4}
			barColor="rgb(105, 126, 240)"
			baseConfig={{
				hasYAxisBackgroundLines: false,
				xAxisLabelStyle: {
					rotation: 0,
					fontSize: 13,
					width: 60,
					yOffset: 4,
					xOffset: -12,
				},
				hasYAxisLabels: false,
			}}
			style={{
				// marginLeft: 20,
				marginRight: 60,
				marginTop: -60,
				padding: 10,
				// borderWidth: 1,
				// borderColor: "#EEEEEE",
				borderRadius: 10,
				width: Dimensions.get("window").width - 150,
				// backgroundColor: `#FAFAFA`,
			}}
		/>
	)
}

export default HorizontalBarGraphComponent
