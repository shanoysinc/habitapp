import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { colorBg } from "../global/global"
import BezierChartComponent from "../components/statistics/BezierChart"
import { Title } from "react-native-paper"
import StackChartComponent from "../components/statistics/StackChart"
import VerticalBarGraphComponent from "../components/statistics/VerticalBarGraphComponent"
import { connect } from "react-redux"

const Progress = ({ habitList, refreshChart }) => {
	// console.log("refreshing", refreshChart)
	return (
		<View style={colorBg}>
			<Title style={styles.textTitle}>Overall Progress</Title>
			<VerticalBarGraphComponent />
			<FlatList
				showsVerticalScrollIndicator={false}
				data={habitList}
				extraData={refreshChart}
				renderItem={({ item }) =>
					item.bezierChart[0].data.length > 1 ? (
						<>
							<Title style={styles.textTitle}>{item.name}</Title>
							<BezierChartComponent
								bezierData={item.bezierChart}
								color={item.color}
							/>
						</>
					) : null
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
		color: "#424242",
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
		refreshChart: state.progressRefreshReducer,
	}
}
export default connect(mapStateToProps, null)(Progress)
