import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Title, Button, Modal, Portal } from "react-native-paper"
import ShowSnackBar from "./SnackBar"
import { connect } from "react-redux"
import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"

const IsCompleteModal = ({
	showModal,
	removeModal,
	increaseHabitPercentage,
	currentHabitKey,
	bezierChartDispatch,
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
		bezierChartDispatch(currentHabitKey)
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
									style={styles.modalBtn}
									onPress={breakButton}
								>
									break
								</Button>
								<Button
									mode="contained"
									style={styles.modalBtn}
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
})

export default IsCompleteModal
