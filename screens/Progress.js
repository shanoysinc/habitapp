import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native"
import { colorBg } from "../global/global"
// import BezierChartComponent from "../components/statistics/BezierChart"
// import StackChartComponent from "../components/statistics/StackChart"
// import VerticalBarGraphComponent from "../components/statistics/VerticalBarGraphComponent"
import { connect } from "react-redux"
// import LineGraphComponent from "../components/statistics/LineGraphComponent"
import HorizontalBarGraphComponent from "../components/statistics/HorizontalBarGraphComponent"
import ProgressChartComponent from "../components/statistics/ProgressChart"
import { Card, Title, Paragraph } from "react-native-paper"

const Progress = ({ habitList, disciplinePercentage }) => {
	const [percentage, setPercentage] = useState(50)

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={colorBg}>
				<Title style={styles.textTitle}>Overall discipline level</Title>
				{/* <VerticalBarGraphComponent /> */}
				<View style={styles.disciplineMainContainer}>
					<View style={styles.disciplineContainer}>
						<Text style={styles.disciplinePercentage}>
							{disciplinePercentage}%
						</Text>
						<Text style={styles.disciplineText}>discipline</Text>
					</View>
					<ProgressChartComponent
						progressData={disciplinePercentage}
						height={200}
						style={{
							marginTop: "5%",
							marginLeft: "10%",
						}}
						strokeWidth={15}
						radius={80}
					/>
				</View>
				<View style={styles.todaysCardContainer}>
					<Title style={styles.textTitle}>Your best habit</Title>
					<Card style={styles.todaysCard}>
						<Card.Content>
							<Title style={styles.todaysTitle}>Exercise</Title>
							<Paragraph style={styles.todaysParagraph}>
								Fitness
							</Paragraph>
							<Title style={styles.todaysPercentage}>91%</Title>
						</Card.Content>
					</Card>
				</View>
				<View style={styles.currentStatsContainer}>
					<View style={styles.currentStats}>
						<Title style={styles.currentStatsTitle}>
							Best Streak
						</Title>
						<Title style={styles.currentStatsNum}>5</Title>
					</View>
					<View style={styles.currentStats}>
						<Title style={styles.currentStatsTitle}>
							Perfect Days
						</Title>
						<Title style={styles.currentStatsNum}>51</Title>
					</View>
				</View>
				<View style={styles.horizontalBarContainer}>
					<Title style={styles.textTitle}>Most productive day</Title>

					<HorizontalBarGraphComponent />
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
		marginTop: 20,
		color: "#424242",
	},
	disciplineMainContainer: {
		marginBottom: 10,
	},
	disciplineContainer: {
		position: "absolute",
		marginLeft: "43%",
		marginTop: "24%",
	},
	disciplinePercentage: {
		fontSize: 32,
	},
	disciplineText: {
		fontSize: 12,
	},
	// todaysCardContainer: {
	// 	marginBottom: -20,
	// },
	todaysCard: {
		marginTop: 10,
		marginLeft: 40,
		marginRight: 5,
		height: "28%",
		width: "80%",
		elevation: 3,
		borderRadius: 10,
		marginBottom: 20,
		backgroundColor: "#424242",
	},
	todaysTitle: {
		fontSize: 28,
		color: "white",
	},
	todaysParagraph: {
		fontSize: 15,
		color: "white",
	},
	todaysPercentage: {
		fontSize: 30,
		left: 210,
		bottom: 24,
		color: "white",
		position: "absolute",
	},
	horizontalBarContainer: {
		marginTop: -140,
		marginBottom: 100,
	},
	currentStatsContainer: {
		flexDirection: "row",
	},

	currentStats: {
		bottom: 150,
		width: "30%",
		marginLeft: 55,
	},
	currentStatsTitle: {
		textAlign: "center",
		fontSize: 17,
		color: "#424242",
	},
	currentStatsNum: {
		textAlign: "center",
		fontSize: 30,
		color: "#424242",
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
		refreshChart: state.progressRefreshReducer,
		disciplinePercentage: state.statisticsReducer,
	}
}
export default connect(mapStateToProps, null)(Progress)
