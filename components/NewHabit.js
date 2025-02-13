import React, { useState, useRef } from "react"
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
	Alert,
	Text,
} from "react-native"
import { Title, Button, Chip, Paragraph } from "react-native-paper"
import { connect } from "react-redux"
import { createHabit } from "../actions/createHabitActions"
import { colorBg } from "../global/global"
import { selectedColor } from "../actions/selectedColorAction"
import { selectedCategoryAction } from "../actions/selectedCategoryAction"
import moment from "moment"
import { Ionicons } from "@expo/vector-icons"
// import uuid from "react-native-uuid"

const CreatingHabit = ({
	create,
	categoryList,
	colorList,
	color,
	categoryColor,
	navigation,
}) => {
	const inputRef = useRef()
	const [input, setInput] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("")
	const [selectedColor, setSelectedColor] = useState("")
	const [refresh, setRefresh] = useState(false)

	const inputHandler = (value) => {
		setInput(value)
		///console.log(value)
	}

	const categoryHandler = (catName, key) => {
		setSelectedCategory(catName)
		categoryColor(key)
	}

	const buttonHandler = () => {
		const date = moment().format("MMM Do YY")

		if (input.length <= 14) {
			if (input != "" && selectedColor != "" && selectedCategory != "") {
				let log = {}
				log[date] = {}
				log[date].complete = false
				log[date].percentageLog = 0

				create(
					createHabit({
						name: input,
						category: selectedCategory,
						color: selectedColor,
						key: `${Math.random()}`,
						disciplinePercentage: 0,
						bezierChart: [
							{
								data: [],
							},
						],
						log,
						streak: 0,
						lastDateOfLOG: date,
					})
				)
				inputRef.current.clear()
				setInput("")
				navigation.jumpTo("Home")
			} else {
				Alert.alert(
					"Message",
					"Habit name, category and colors must not be empty good luck on your journey"
				)
			}
		} else {
			Alert.alert(
				"Message",
				"Habit name must be less than 15 characters long"
			)
		}
	}

	const selectedColorHandler = (colorName, key) => {
		color(key)
		setSelectedColor(colorName)
		setRefresh(!refresh)
	}

	return (
		<View style={colorBg}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<Title style={styles.title}>Create your habit</Title>
					<View style={styles.inputContainer}>
						<TextInput
							ref={inputRef}
							onChangeText={inputHandler}
							placeholder="Habit name"
							style={styles.habitNameInput}
						/>
					</View>
					<View style={styles.catgoryContainer}>
						<Title style={styles.title}>
							Select habit Category
						</Title>
						<FlatList
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={categoryList}
							renderItem={({ item }) =>
								item.selected ? (
									<Chip
										mode="contained"
										style={[
											styles.categoryItem,
											{
												borderWidth: 1.9,
												backgroundColor:
													"rgb(88, 113, 252)",
											},
										]}
										textStyle={{ fontSize: 20 }}
									>
										<Paragraph
											style={[
												styles.categoryText,
												{ color: "white" },
											]}
										>
											{item.name}
										</Paragraph>
									</Chip>
								) : (
									<Chip
										mode="contained"
										style={styles.categoryItem}
										onPress={() =>
											categoryHandler(item.name, item.key)
										}
										textStyle={{ fontSize: 20 }}
									>
										<Paragraph style={styles.categoryText}>
											{item.name}
										</Paragraph>
									</Chip>
								)
							}
						/>
					</View>
					<View style={styles.colorContainer}>
						<Title style={styles.title}>Select habit color</Title>
						<FlatList
							numColumns={5}
							data={colorList}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(item) => item.key}
							extraData={refresh}
							renderItem={({ item }) =>
								item.selected ? (
									<Chip
										style={[
											styles.colorItem,
											{
												backgroundColor: item.color,
												borderWidth: 4,
												borderColor:
													"rgb(88, 113, 252)",
											},
										]}
									></Chip>
								) : (
									<Chip
										style={[
											styles.colorItem,
											{ backgroundColor: item.color },
										]}
										onPress={() =>
											selectedColorHandler(
												item.color,
												item.key
											)
										}
									></Chip>
								)
							}
						/>
					</View>
					<TouchableOpacity>
						<Button
							mode="contained"
							style={styles.btn}
							onPress={buttonHandler}
						>
							<Text style={styles.btnText}>create</Text>
							<Ionicons
								name="ios-create"
								size={17}
								color="white"
							/>
						</Button>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
	},
	title: {
		paddingBottom: 10,
		color: "#BDBDBD",
	},
	habitNameInput: {
		borderColor: "#dddddd",
		borderWidth: 2,
		height: 62,
		paddingLeft: 15,
		fontSize: 22,
		borderRadius: 10,
	},
	container: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 60,
		flex: 1,
	},
	catgoryContainer: {
		marginTop: 40,
		maxHeight: "50%",
	},

	categoryItem: {
		marginLeft: 10,
		marginRight: 10,
		paddingTop: 5,
		height: 40,
		borderRadius: 20,
	},
	categoryText: {
		width: "100%",
		color: "#9E9E9E",
	},

	colorContainer: {
		marginTop: 30,
		maxHeight: "35%",
	},
	colorItem: {
		marginLeft: 25,
		marginRight: 10,
		marginTop: 5,
		width: 30,
		height: 30,
		borderRadius: 20,
	},
	btn: {
		marginTop: 30,
		height: 40,
		marginLeft: "30%",
		width: "35%",
		backgroundColor: "rgb(88, 113, 252)",
		color: "white",
		borderRadius: 5,
	},
	btnText: {
		fontWeight: "bold",
	},
})

const mapStateToProps = (state) => {
	return {
		categoryList: state.habitCategoryReducer,
		colorList: state.habitsColorReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: (action) => dispatch(action),
		color: (action) => dispatch(selectedColor(action)),
		categoryColor: (action) => dispatch(selectedCategoryAction(action)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatingHabit)
