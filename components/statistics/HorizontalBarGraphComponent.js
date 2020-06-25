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
			width={Dimensions.get("window").width - 50}
			height={225}
			barRadius={4}
			barWidthPercentage={0.3}
			barColor="#B39DDB"
			baseConfig={{
				hasYAxisBackgroundLines: false,
				xAxisLabelStyle: {
					rotation: 0,
					fontSize: 11,
					width: 60,
					yOffset: 4,
					xOffset: -12,
				},
				hasYAxisLabels: false,
			}}
			style={{
				// marginLeft: 20,
				marginRight: 60,
				marginBottom: 30,
				padding: 10,
				// paddingTop: 20,
				borderRadius: 20,
				width: Dimensions.get("window").width - 120,
				backgroundColor: `#FAFAFA`,
			}}
		/>
	)
}

export default HorizontalBarGraphComponent
