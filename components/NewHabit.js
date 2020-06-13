import React, { useState } from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
	Text,
	TextInput,
} from "react-native"
import { Card, Title, Paragraph, Button } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
import { createHabit } from "../actions/createHabitActions"

const CreatingHabit = ({ create }) => {
	const [input, setInput] = useState("")

	const inputHandler = (value) => {
		setInput(value)
		///console.log(value)
	}

	const buttonHandler = () => {
		create(createHabit(input))
	}
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Title style={styles.title}>Create your new Habit</Title>
				<TextInput
					onChangeText={inputHandler}
					placeholder="Habit name"
					style={styles.input}
				/>
			</View>
			<TouchableOpacity>
				<Button
					mode="contained"
					style={styles.btn}
					onPress={buttonHandler}
				>
					create habit
				</Button>
			</TouchableOpacity>
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
	btn: {
		marginTop: 30,
	},
})

const mapDispatchToProps = (dispatch) => {
	return {
		create: (action) => dispatch(action),
	}
}

export default connect(null, mapDispatchToProps)(CreatingHabit)
