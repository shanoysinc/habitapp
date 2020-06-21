import React, { useState, useEffect } from "react"
import { StyleSheet, View, Image, FlatList } from "react-native"
import { Card, Title, Paragraph, Provider } from "react-native-paper"
import { connect } from "react-redux"
import IsCompleteModal from "./IsCompleteModal"
import ProgressChartComponent from "../components/statistics/ProgressChart"
import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
import { increasePercentage } from "../actions/habitListActions"
import { undoHabitLog } from "../actions/habitListActions"
import moment from "moment"
import UndoLog from "../components/modals/UndoLog"

const Home = ({
	habitList,
	bezierChartDispatch,
	increaseHabitPercentage,
	undoLogforDay,
}) => {
	const date = moment().format("MMM Do YY")
	const [visible, setVisible] = useState(false)
	const [currentHabitKey, setCurrentHabitKey] = useState("")
	const [isHabitComplete, setIsHabitComplete] = useState(false)
	const [undoVisible, setUndoVisible] = useState(false)

	const habitcompleteHandler = (key) => {
		setCurrentHabitKey(key)
		habitList.find((habit) => {
			if (habit.key == key) {
				//if (habit.log.length > 0) {
				habit.log.find((currentDate) => {
					if (currentDate.date == date) {
						console.log("currentDate", currentDate.complete)
						if (currentDate.complete) {
							setUndoVisible(true)
							//setVisible(false)
						} else {
							setVisible(true)
							//setUndoVisible(false)
						}
					}
				})
				//	}
			}
		})
		console.log("current key", key)

		console.log("is habit complete", isHabitComplete)
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
					<Title style={styles.title}>Today</Title>
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
							<ProgressChartComponent />
						</Card.Content>
					</Card>

					<Title style={styles.title}>Habits</Title>

					{habitList.length < 1 ? (
						<Image
							source={require("../assets/icons/bghabit-min.png")}
							style={styles.imageIcon}
						/>
					) : (
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
										<Paragraph style={styles.textCenter}>
											{item.category}
										</Paragraph>
										<Title style={styles.cardPercentage}>
											{item.disciplinePercentage}%
										</Title>
									</Card.Content>
								</Card>
							)}
						/>
					)}

					<UndoLog
						showModal={undoVisible}
						removeUndoModal={dismissUndo}
						undoLogforDay={undoLogforDay}
						currentHabitKey={currentHabitKey}
					/>

					<IsCompleteModal
						showModal={visible}
						removeModal={dismissModal}
						bezierChartDispatch={bezierChartDispatch}
						increaseHabitPercentage={increaseHabitPercentage}
						currentHabitKey={currentHabitKey}
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
	},
	body: {
		margin: 20,
		flex: 1,
		marginBottom: 1, //show the bottom of the last item on habitlist
	},

	todaysCard: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: "20%",
		backgroundColor: "#FAFAFA",
		elevation: 3,
		marginBottom: 12,
		borderRadius: 10,
	},
	todaysTitle: {
		fontSize: 28,
		color: "white",
	},
	todaysParagraph: {
		fontSize: 15,
		color: "white",
	},

	habitCard: {
		borderRadius: 10,
		margin: 10,
		height: 135,
		width: 150,
		elevation: 3,
	},
	textCenter: {
		textAlign: "center",
		fontSize: 15,
		lineHeight: 0,
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 16,
	},
	cardPercentage: {
		textAlign: "center",
		fontSize: 32,
		marginTop: 22,
		marginLeft: 8,
	},
	iconImage: {
		height: 20,
		width: 20,
		top: 105,
		right: 10,
		position: "absolute",
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
		marginLeft: 10,
		position: "absolute",
		height: 300,
		width: 300,
		marginTop: "60%",
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		bezierChartDispatch: (key, data) => {
			dispatch(addToBezierChart(key, data))
		},
		increaseHabitPercentage: (key) => dispatch(increasePercentage(key)),
		undoLogforDay: (key) => dispatch(undoHabitLog(key)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
