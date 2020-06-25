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

const Progress = ({ habitList, disciplinePercentage, productiveDay }) => {
	const [bestHabitName, setBestHabitName] = useState("Living")
	const [bestHabitCat, setBestHabitCat] = useState("well being")
	const [bestHabitPercen, setBestHabitPercen] = useState(0)

	useEffect(() => {
		// let date = "June 20th 20"
		// currentDate = moment().format("MMM Do YY")
		// let fetchDate = moment(date, "MMM Do YY")
		// 	.add(1, "days")
		// 	.format("MMM Do YY")

		habitList.forEach((habit) => {
			if (habit.disciplinePercentage + habit.streak >= bestHabitPercen) {
				setBestHabitName(habit.name)
				setBestHabitCat(habit.category)
				setBestHabitPercen(habit.disciplinePercentage)
			}
		})
	}, [])

	useEffect(() => {}, [productiveDay])

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
				<View style={styles.besthabitCardContainer}>
					<Title style={styles.textTitle}>Your best habit</Title>
					<Card style={styles.besthabitCard}>
						<Card.Content>
							<Title style={styles.besthabitTitle}>
								{bestHabitName}
							</Title>
							<Paragraph style={styles.besthabitParagraph}>
								{bestHabitCat}
							</Paragraph>
							<Title style={styles.besthabitPercentage}>
								{bestHabitPercen}%
							</Title>
						</Card.Content>
					</Card>
				</View>
				{/* <View style={styles.currentStatsContainer}>
					<View style={styles.currentStats}>
						<Title style={styles.currentStatsTitle}>
							Best Streak
						</Title>
						<Title style={styles.currentStatsNum}>5</Title>
					</View>
					<View style={styles.currentStats}>
						<Title style={styles.currentStatsTitle}>
							Total Habits Complete
						</Title>
						<Title style={styles.currentStatsNum}>
							{perfectDays}
						</Title>
					</View>
				</View> */}
				<View style={styles.horizontalBarContainer}>
					<Title style={styles.textTitle}>Most productive day</Title>

					<HorizontalBarGraphComponent data={productiveDay} />
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
		color: "#9575CD",
	},
	disciplineText: {
		fontSize: 12,
		color: "#9575CD",
	},
	// todaysCardContainer: {
	// 	marginBottom: -20,
	// },
	besthabitCard: {
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
	besthabitTitle: {
		fontSize: 28,
		color: "white",
	},
	besthabitParagraph: {
		fontSize: 15,
		color: "white",
	},
	besthabitPercentage: {
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
		productiveDay: state.productiveDayReducer,
	}
}
export default connect(mapStateToProps, null)(Progress)
