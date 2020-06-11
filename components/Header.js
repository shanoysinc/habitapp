import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Appbar } from "react-native-paper"
const Header = () => {
	return (
		<Appbar.Header style={styles.container}>
			<Appbar.Content title="Habita" titleStyle={styles.HeaderTitle} />
		</Appbar.Header>
	)
}

const styles = StyleSheet.create({
	HeaderTitle: {
		fontSize: 20,
		fontWeight: "bold",
	},
	container: {
		marginBottom: 20,
	},
})

export default Header
