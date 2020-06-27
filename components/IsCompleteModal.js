import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Title, Button, Modal, Portal } from "react-native-paper"
import ShowSnackBar from "./SnackBar"
// import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
import { connect } from "react-redux"
import { isHabitComplete } from "../actions/isHabitCompleteAction"
import { increaseDisciplinePercentage } from "../actions/chartsAction/overallDisciplineActiions"
import { increaseProductivity } from "../actions/chartsAction/productiveDayActions"

import { Feather } from "@expo/vector-icons"
const IsCompleteModal = ({
	showModal,
	removeModal,
	increaseHabitPercentage,
	currentHabitKey,
	addDataToDatabezierChart,
	refreshChartData,
	isHabitComplete,
	increaseDisciplinePercentage,
	increaseProductivity,
}) => {
	const [isSnackBarVisible, setSnackBarVisible] = useState(false)

	const breakButton = () => {
		// console.log("break")
		removeModal()
		setSnackBarVisible(true)
	}

	const dismissSnackBar = () => {
		setSnackBarVisible(false)
	}

	const completeHabitHandler = () => {
		removeModal()
		increaseHabitPercentage(currentHabitKey)
		isHabitComplete(currentHabitKey)
		addDataToDatabezierChart(currentHabitKey)
		increaseDisciplinePercentage()
		increaseProductivity()
		// refreshChartData()
		// console.log(

		// )
	}
	return (
		<>
			<Portal>
				<Modal visible={showModal} onDismiss={removeModal}>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<View style={styles.modalHeader}>
								<Title style={styles.modalTitle}>
									Did you complete this habit today?
								</Title>
							</View>
							<View style={styles.modalButtonContainer}>
								<Button
									mode="contained"
									style={[styles.modalBtn, styles.breakBtn]}
									onPress={breakButton}
								>
									<Text style={styles.modalText}>Break</Text>
									<Feather
										name="x-square"
										size={15}
										color="white"
									/>
								</Button>
								<Button
									mode="contained"
									style={[
										styles.modalBtn,
										styles.completeBtn,
									]}
									onPress={completeHabitHandler}
								>
									<Text style={styles.modalText}>Done</Text>
									<Feather
										name="check-square"
										size={15}
										color="white"
									/>
								</Button>
							</View>
						</View>
					</View>
				</Modal>
			</Portal>
			<ShowSnackBar
				show={isSnackBarVisible}
				dismissSnackBar={dismissSnackBar}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		marginLeft: 60,
		marginRight: 50,
		backgroundColor: "white",
		height: 120,
		width: "70%",
		borderRadius: 10,
	},
	modalContent: {
		margin: 10,
	},
	// modalHeader: {
	// 	borderBottomColor: "#F5F5F5",
	// 	borderBottomWidth: 2,
	// },
	modalTitle: {
		textAlign: "center",
		marginBottom: 20,
		color: "#616161",
		lineHeight: 0,
		fontSize: 16,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	modalButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: -10,
	},
	modalBtn: {
		height: 40,
		borderRadius: 5,
		width: 95,
		marginLeft: 10,
	},
	completeBtn: {
		backgroundColor: "rgb(88, 113, 252)",
	},
	breakBtn: {
		backgroundColor: "#B0BEC5",
		color: "white",
		// paddingRight: 13,
	},
	modalText: {
		fontWeight: "bold",
		fontSize: 12,
	},
})

const mapDispatchToProps = (dispatch) => {
	return {
		isHabitComplete: (key) => dispatch(isHabitComplete(key)),
		increaseDisciplinePercentage: () => {
			dispatch(increaseDisciplinePercentage())
		},
		increaseProductivity: () => {
			dispatch(increaseProductivity())
		},
	}
}

export default connect(null, mapDispatchToProps)(IsCompleteModal)
