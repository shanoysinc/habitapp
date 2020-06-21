import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Title, Button, Modal, Portal } from "react-native-paper"
//import ShowSnackBar from "./SnackBar"
// import { connect } from "react-redux"
// import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
// import { refreshProgressGraph } from "../actions/chartsAction/refreshChartAction"
// import { connect } from "react-redux"
// import { isHabitComplete } from "../actions/isHabitCompleteAction"

const UndoLog = ({ showModal, removeModal }) => {
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
		//	logCheck()
		removeModal()

		// increaseHabitPercentage(currentHabitKey)
		// isHabitComplete(currentHabitKey)
		// bezierChartDispatch(currentHabitKey)
		//refreshChartData()
	}
	return (
		<>
			<Portal>
				<Modal visible={showModal} onDismiss={removeModal}>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<View style={styles.modalHeader}>
								<Title style={styles.modalTitle}>
									Remove todays log
								</Title>
							</View>
							<View style={styles.modalButtonContainer}>
								<Button
									mode="contained"
									style={[
										styles.modalBtn,
										styles.completeBtn,
									]}
									onPress={completeHabitHandler}
								>
									Undo
								</Button>
							</View>
						</View>
					</View>
				</Modal>
			</Portal>
			{/* <ShowSnackBar
				show={isSnackBarVisible}
				dismissSnackBar={dismissSnackBar}
			/> */}
		</>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		marginLeft: 50,
		marginRight: 50,
		backgroundColor: "#FAFAFA",
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
})

export default UndoLog
