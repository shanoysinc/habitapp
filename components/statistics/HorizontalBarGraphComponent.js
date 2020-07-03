import React, { useEffect } from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import HorizontalBarGraph from "@chartiful/react-native-horizontal-bar-graph"
// import { connect } from "react-redux"
// import { getProductiveDay } from "../../actions/chartsAction/productiveDayActions"

const HorizontalBarGraphComponent = (props) => {
	const {
		Friday,
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Saturday,
	} = props
	return (
		<HorizontalBarGraph
			data={[
				Saturday,
				Friday,
				Thursday,
				Wednesday,
				Tuesday,
				Monday,
				Sunday,
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

// const mapStateToProps = (state) => {
// 	return {
// 		productiveDay: state.productiveDayReducer,
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getProductiveDay: () => dispatch(getProductiveDay()),
// 	}
// }

// export default connect(null, mapDispatchToProps)(HorizontalBarGraphComponent)
export default HorizontalBarGraphComponent
