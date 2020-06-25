import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Title, Button, Modal, Portal } from "react-native-paper"
import ShowSnackBar from "./SnackBar"
// import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
import { connect } from "react-redux"
import { isHabitComplete } from "../actions/isHabitCompleteAction"
import { increaseDisciplinePercentage } from "../actions/chartsAction/overallDisciplineActiions"
import { increaseProductivity } from "../actions/chartsAction/productiveDayActions"

import moment from "moment"

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
									mode="outlined"
									style={[styles.modalBtn, styles.breakBtn]}
									onPress={breakButton}
									color="#212121"
								>
									break
								</Button>
								<Button
									mode="contained"
									style={[
										styles.modalBtn,
										styles.completeBtn,
									]}
									onPress={completeHabitHandler}
								>
									complete
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
		marginLeft: 50,
		marginRight: 50,
		backgroundColor: "#ECEFF1",
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
	completeBtn: {
		backgroundColor: "#212121",
	},
	breakBtn: {},
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
