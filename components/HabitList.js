import React, { useState } from "react"
import { StyleSheet, View, Image, FlatList, Text } from "react-native"
import { Card, Title, Paragraph, Provider } from "react-native-paper"
import { connect } from "react-redux"
import IsCompleteModal from "./IsCompleteModal"
import ProgressChartComponent from "../components/statistics/ProgressChart"

import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
import { removeCurrentDayLogFromBezierChart } from "../actions/chartsAction/bezierChartAction"
import { refreshProgressGraph } from "../actions/chartsAction/refreshChartAction"
import { increasePercentage } from "../actions/habitListActions"
import { undoHabitLog } from "../actions/habitListActions"
import { currentDateToHabitsAction } from "../actions/habitsAction/CurrentDateToHabitsAction"
import { updateCurrentDateAction } from "../actions/habitsAction/updateCurrentDateAction"

import moment from "moment"
import UndoLog from "../components/modals/UndoLog"

const Home = ({
	habitList,
	addDataToDatabezierChart,
	increaseHabitPercentage,
	undoLogforDay,
	removeDataFromBeizerData,
	refreshChartData,
	currentDateReducer,
	currentDateToHabitsAction,
	updateCurrentDateAction,
}) => {
	const date = moment().format("MMM Do YY")
	const [visible, setVisible] = useState(false)
	const [currentHabitKey, setCurrentHabitKey] = useState("")
	const [undoVisible, setUndoVisible] = useState(false)

	if (currentDateReducer != date) {
		updateCurrentDateAction()
		currentDateToHabitsAction()
	}

	const habitcompleteHandler = (key) => {
		setCurrentHabitKey(key)
		habitList.find((habit) => {
			if (habit.key == key) {
				if (habit.log[date].complete) {
					setUndoVisible(true)
				} else {
					setVisible(true)
				}
			}
		})
	}

	const dismissModal = () => {
		setVisible(false)
	}
	const dismissUndo = () => {
		setUndoVisible(false)
	}

	return (
		<Provider>
			<View style={styles.container}>
				<View style={styles.body}>
					{habitList.length < 1 ? (
						<>
							<Image
								source={require("../assets/icons/bghabit-min.png")}
								style={styles.imageIcon}
							/>
							<Text style={styles.getStartedText}>
								You haven't add any habits as yet. Hurry up and
								get started
							</Text>
						</>
					) : (
						<>
							<Title style={styles.title}>Habits</Title>
							<FlatList
								numColumns={2}
								data={habitList}
								keyExtractor={(item) => item.key}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => (
									<Card
										style={[
											styles.habitCard,
											{ backgroundColor: item.color },
										]}
										onPress={() =>
											habitcompleteHandler(item.key)
										}
									>
										<Card.Content>
											<Title
												style={[
													styles.textCenter,
													styles.cardTitle,
												]}
											>
												{item.name}
											</Title>
											<Paragraph
												style={styles.textCenter}
											>
												{item.category}
											</Paragraph>

											<ProgressChartComponent
												progressData={
													item.disciplinePercentage
												}
												height={140}
												style={{
													marginTop: "20%",
													marginLeft: "-62%",
													position: "absolute",
													zIndex: 10,
												}}
												strokeWidth={6}
												radius={24}
											/>
											<Title
												style={styles.cardPercentage}
											>
												{item.disciplinePercentage}%
											</Title>
										</Card.Content>
									</Card>
								)}
							/>
						</>
					)}

					<UndoLog
						showModal={undoVisible}
						removeUndoModal={dismissUndo}
						undoLogforDay={undoLogforDay}
						currentHabitKey={currentHabitKey}
						removeDataFromBeizerData={removeDataFromBeizerData}
						refreshChartData={refreshChartData}
					/>

					<IsCompleteModal
						showModal={visible}
						removeModal={dismissModal}
						addDataToDatabezierChart={addDataToDatabezierChart}
						increaseHabitPercentage={increaseHabitPercentage}
						currentHabitKey={currentHabitKey}
						refreshChartData={refreshChartData}
					/>
				</View>
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	title: {
		fontSize: 22,
		fontWeight: "bold",
		// textAlign: "center",
		color: "#424242",
	},
	body: {
		margin: 20,
		flex: 1,
		marginBottom: 1, //show the bottom of the last item on habitlist
	},

	habitCard: {
		borderRadius: 10,
		margin: 10,
		height: 135,
		width: 150,
		elevation: 2,
		position: "relative",
	},
	textCenter: {
		textAlign: "center",
		fontSize: 11,
		lineHeight: 0,
		color: "#424242",
		// color: "white",
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 15,
		color: "#424242",
		textTransform: "capitalize",
	},
	cardPercentage: {
		textAlign: "center",
		fontSize: 13,
		marginTop: 22,
		marginLeft: 8,
		// color: "rgb(88, 113, 252)",
		color: "white",
	},

	modalContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		marginLeft: 35,
		marginRight: 50,
		backgroundColor: "white",
		height: 160,
		width: "75%",
		borderRadius: 10,
	},
	modalContent: {
		margin: 10,
	},
	modalHeader: {
		borderBottomColor: "#F5F5F5",
		borderBottomWidth: 2,
	},
	modalTitle: {
		textAlign: "center",
		marginBottom: 20,
		color: "#616161",
		lineHeight: 0,
		fontSize: 18,
	},
	modalButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
	modalBtn: {
		height: 50,
		borderRadius: 10,
		paddingTop: 5,
		width: 120,
		marginLeft: 10,
	},
	imageIcon: {
		height: 300,
		width: 300,
		marginTop: "20%",
	},
	getStartedText: {
		textAlign: "center",
		marginLeft: 20,
		marginRight: 20,
		color: "#424242",
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
		currentDateReducer: state.currentDateReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		refreshChartData: () => dispatch(refreshProgressGraph()),
		addDataToDatabezierChart: (key) => {
			dispatch(addToBezierChart(key))
		},
		increaseHabitPercentage: (key) => dispatch(increasePercentage(key)),
		undoLogforDay: (key) => dispatch(undoHabitLog(key)),
		removeDataFromBeizerData: (key) => {
			dispatch(removeCurrentDayLogFromBezierChart(key))
		},
		currentDateToHabitsAction: () => dispatch(currentDateToHabitsAction()),
		updateCurrentDateAction: () => dispatch(updateCurrentDateAction()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
