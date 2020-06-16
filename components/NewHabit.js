import React, { useState, useRef } from "react"
import {
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native"
import { Title, Button, Chip } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
import { createHabit } from "../actions/createHabitActions"
import { colorBg } from "../global/global"
import { selectedColor } from "../actions/selectedColorAction"
import { selectedCategoryAction } from "../actions/selectedCategoryAction"

const CreatingHabit = ({
	create,
	categoryList,
	colorList,
	color,
	categoryColor,
}) => {
	const inputRef = useRef()
	const [input, setInput] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("")
	const [uuid, setuuid] = useState("2")
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
		setuuid(uuid + 1)
		create(
			createHabit({
				name: input,
				category: selectedCategory,
				key: uuid,
			})
		)
		inputRef.current.clear()
	}

	const selectedColorHandler = (key) => {
		color(key)
		setRefresh(!refresh)
	}

	return (
		<View style={colorBg}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.container}>
					<View style={styles.inputContainer}>
						<TextInput
							ref={inputRef}
							onChangeText={inputHandler}
							placeholder="Habit name...."
							style={styles.habitNameInput}
						/>
					</View>
					<View style={styles.catgoryContainer}>
						<Title style={styles.title}>Category</Title>
						<FlatList
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={categoryList}
							renderItem={({ item }) =>
								item.selected ? (
									<Chip
										mode="outlined"
										style={[
											styles.categoryItem,
											{
												borderWidth: 2,
												borderColor: "black",
											},
										]}
										textStyle={{ fontSize: 20 }}
									>
										{item.name}
									</Chip>
								) : (
									<Chip
										mode="outlined"
										style={styles.categoryItem}
										onPress={() =>
											categoryHandler(item.name, item.key)
										}
										textStyle={{ fontSize: 20 }}
									>
										{item.name}
									</Chip>
								)
							}
						/>
					</View>
					<View style={styles.colorContainer}>
						<Title style={styles.title}>Colors</Title>
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
												borderColor: "black",
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
											selectedColorHandler(item.key)
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
							create habit
						</Button>
					</TouchableOpacity>
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 30,
		width: "100%",
	},
	title: {
		paddingBottom: 10,
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
		margin: 20,
		flex: 1,
	},
	catgoryContainer: {
		marginTop: 30,
		maxHeight: "50%",
	},

	btn: {
		marginTop: 30,
	},

	categoryItem: {
		marginLeft: 10,
		marginRight: 10,
		width: 40,
		height: 40,
		borderRadius: 20,
	},

	colorContainer: {
		marginTop: 60,
		maxHeight: "25%",
	},
	colorItem: {
		marginLeft: 10,
		marginRight: 10,
		width: 40,
		height: 40,
		borderRadius: 20,
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
