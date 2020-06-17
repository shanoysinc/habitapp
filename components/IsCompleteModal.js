import React from "react"
import { StyleSheet, Text, View, Modal } from "react-native"

const IsCompleteModal = ({ show }) => {
	console.log("modal show")
	return (
		<View style={styles.modalContainer}>
			<Modal visible={show}>
				<Text>Hello world</Text>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
})

export default IsCompleteModal
