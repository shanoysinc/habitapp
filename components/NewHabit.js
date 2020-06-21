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
} from "react-native"
import { Title, Button, Chip, Paragraph } from "react-native-paper"
import { connect } from "react-redux"
import { createHabit } from "../actions/createHabitActions"
import { colorBg } from "../global/global"
import { selectedColor } from "../actions/selectedColorAction"
import { selectedCategoryAction } from "../actions/selectedCategoryAction"
import moment from "moment"

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
	const [uuid, setuuid] = useState("0")
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
		console.log(date)

		if (input != "" && selectedColor != "" && selectedCategory != "") {
			setuuid(uuid + 1)
			create(
				createHabit({
					name: input,
					category: selectedCategory,
					color: selectedColor,
					key: uuid,
					disciplinePercentage: 0,
					bezierChart: [
						{
							data: [],
						},
					],
					log: [
						{
							date: date,
							complete: false,
							percentageLog: 0,
						},
					],
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
												backgroundColor: "#212121",
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
							horizontal={true}
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
												borderColor: "#212121",
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
							create new habit
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
		marginTop: 40,
		maxHeight: "35%",
	},
	colorItem: {
		marginLeft: 10,
		marginRight: 10,
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	btn: {
		marginTop: 30,
		height: 62,
		paddingTop: 15,
		// fontWeight: "bold",
		backgroundColor: "#212121",
		color: "white",
		borderRadius: 10,
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
