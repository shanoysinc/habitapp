import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Title, Button, Modal, Portal } from "react-native-paper"
import { undoDisciplinePercentage } from "../../actions/chartsAction/overallDisciplineActiions"
import { connect } from "react-redux"
import { decreaseProductivity } from "../../actions/chartsAction/productiveDayActions"
import { MaterialCommunityIcons } from "@expo/vector-icons"
//import ShowSnackBar from "./SnackBar"

// import { addToBezierChart } from "../actions/chartsAction/bezierChartAction"
// import { refreshProgressGraph } from "../actions/chartsAction/refreshChartAction"
// import { connect } from "react-redux"
// import { isHabitComplete } from "../actions/isHabitCompleteAction"

const UndoLog = ({
	showModal,
	removeUndoModal,
	undoLogforDay,
	currentHabitKey,
	removeDataFromBeizerData,
	refreshChartData,
	undoDisciplinePercentage,
	decreaseProductivity,
}) => {
	// const [isSnackBarVisible, setSnackBarVisible] = useState(false)

	// const breakButton = () => {
	// 	removeUndoModal()
	// 	setSnackBarVisible(true)
	// }

	// const dismissSnackBar = () => {
	// 	setSnackBarVisible(false)
	// }

	const undoHabitHandler = () => {
		undoLogforDay(currentHabitKey)
		removeUndoModal()
		removeDataFromBeizerData(currentHabitKey)
		undoDisciplinePercentage()
		decreaseProductivity()
		// refreshChartData()
	}
	return (
		<>
			<Portal>
				<Modal visible={showModal} onDismiss={removeUndoModal}>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<View style={styles.modalHeader}>
								<Title style={styles.modalTitle}>
									Remove today's log
								</Title>
							</View>
							<View style={styles.modalButtonContainer}>
								<Button
									mode="contained"
									style={[styles.modalBtn, styles.undoBtn]}
									onPress={undoHabitHandler}
								>
									<Text style={styles.modalText}>Undo</Text>
									<MaterialCommunityIcons
										name="undo-variant"
										size={15}
										color="white"
									/>
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
		marginLeft: 75,
		marginRight: 50,
		backgroundColor: "white",
		height: 100,
		width: "60%",
		borderRadius: 10,
	},
	modalContent: {
		margin: 10,
	},
	modalHeader: {
		// borderBottomColor: "#ECEFF1",
		// borderBottomWidth: 2,
	},
	modalTitle: {
		textAlign: "center",
		marginTop: 5,
		color: "#616161",
		lineHeight: 0,
		fontSize: 16,
		paddingBottom: 5,
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	modalButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		// marginTop: -10,
	},
	modalBtn: {
		height: 40,
		borderRadius: 5,
		width: 95,
		paddingTop: 5,
		marginLeft: 10,
	},
	undoBtn: {
		backgroundColor: "#B0BEC5",
		color: "white",
		paddingTop: 1,
	},
	modalText: {
		paddingTop: 10,
		fontWeight: "bold",
	},
})

const mapDispatchToProps = (dispatch) => {
	return {
		undoDisciplinePercentage: () => {
			dispatch(undoDisciplinePercentage())
		},
		decreaseProductivity: () => {
			dispatch(decreaseProductivity())
		},
	}
}

export default connect(null, mapDispatchToProps)(UndoLog)
