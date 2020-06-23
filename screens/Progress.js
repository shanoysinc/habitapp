import React from "react"
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native"
import { colorBg } from "../global/global"
import BezierChartComponent from "../components/statistics/BezierChart"
import StackChartComponent from "../components/statistics/StackChart"
import VerticalBarGraphComponent from "../components/statistics/VerticalBarGraphComponent"
import { connect } from "react-redux"
import LineGraphComponent from "../components/statistics/LineGraphComponent"
import HorizontalBarGraphComponent from "../components/statistics/HorizontalBarGraphComponent"
import ProgressChartComponent from "../components/statistics/ProgressChart"
import { Card, Title, Paragraph } from "react-native-paper"

const Progress = ({ habitList, refreshChart }) => {
	// console.log("refreshing", refreshChart)
	return (
		<ScrollView>
			<View style={colorBg}>
				<Title style={styles.textTitle}>Overall discipline level</Title>
				{/* <VerticalBarGraphComponent /> */}
				<View style={styles.disciplineMainContainer}>
					<View style={styles.disciplineContainer}>
						<Text style={styles.disciplinePercentage}>78%</Text>
						<Text style={styles.disciplineText}>discipline</Text>
					</View>
					<ProgressChartComponent
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
					<Card
						style={[
							styles.todaysCard,
							{ backgroundColor: "#212121" },
						]}
					>
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
							Logs Done
						</Title>
						<Title style={styles.currentStatsNum}>51</Title>
					</View>
				</View>
				<View style={styles.horizontalBarContainer}>
					<Title style={styles.textTitle}>Most productive day</Title>

					<HorizontalBarGraphComponent />
				</View>
				{/* <LineGraphComponent /> */}
				{/* <FlatList
					showsVerticalScrollIndicator={false}
					data={habitList}
					extraData={refreshChart}
					renderItem={({ item }) =>
						item.bezierChart[0].data.length > 1 ? (
							<>
								<Title style={styles.textTitle}>
									{item.name}
								</Title>
								<BezierChartComponent
									bezierData={item.bezierChart}
									color={item.color}
								/>
							</>
						) : null
					}
				/> */}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 18,
		fontWeight: "400",
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
		marginLeft: 50,
		marginRight: 5,
		height: "28%",
		width: "75%",
		elevation: 3,
		borderRadius: 10,
		marginBottom: 20,
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
		left: 190,
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
		fontSize: 20,
	},
	currentStatsNum: {
		textAlign: "center",
		fontSize: 30,
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
		refreshChart: state.progressRefreshReducer,
	}
}
export default connect(mapStateToProps, null)(Progress)
