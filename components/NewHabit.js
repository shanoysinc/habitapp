import React from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	Text,
	TextInput,
} from "react-native"
import { Card, Title, Paragraph } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"

const CreatingHabit = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Title style={styles.title}>Create your new Habit</Title>
				<TextInput placeholder="Habit name" style={styles.input} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 60,
		width: "85%",
	},
	title: {
		textAlign: "center",
		paddingBottom: 10,
	},
	input: {
		borderColor: "red",
		borderWidth: 2,
		height: 70,
		paddingLeft: 10,
		fontSize: 22,
	},
	container: {
		alignItems: "center",
	},
})

const mapDispatchToProps = () => {
	return {}
}

export default connect(null, mapDispatchToProps)(CreatingHabit)
