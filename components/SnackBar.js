import React from "react"
import { StyleSheet, View } from "react-native"
import { Snackbar } from "react-native-paper"

const ShowSnackBar = ({ show, dismissSnackBar }) => {
	return (
		<View>
			<Snackbar
				visible={show}
				onDismiss={dismissSnackBar}
				duration={2500}
				style={styles.snackBar}
			>
				Don't be upset sometimes its good to take breaks
			</Snackbar>
		</View>
	)
}
const styles = StyleSheet.create({
	snackBar: {
		height: 60,
	},
})
export default ShowSnackBar
