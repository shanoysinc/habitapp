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

const CreatingHabit = ({ create, categoryList, colorList, color }) => {
	const inputRef = useRef()
	const [input, setInput] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("")
	const [uuid, setuuid] = useState("2")
	const [refresh, setRefresh] = useState(false)

	const inputHandler = (value) => {
		setInput(value)
		///console.log(value)
	}

	const categoryHandler = (cat) => {
		return () => setSelectedCategory(cat)
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
		color(selectedColor(key))
		setRefresh(!refresh)
	}

	return (
		<View style={[styles.container, colorBg]}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<>
					<View style={styles.inputContainer}>
						<Title style={styles.title}>
							Create your new Habit
						</Title>
						<TextInput
							ref={inputRef}
							onChangeText={inputHandler}
							placeholder="Habit name"
							style={styles.input}
						/>
					</View>
					<View style={styles.catgoryContainer}>
						<Title style={styles.title}>Category</Title>
						<FlatList
							showsHorizontalScrollIndicator={false}
							horizontal={true}
							data={categoryList}
							renderItem={({ item }) => (
								<Chip
									mode="outlined"
									style={styles.categoryItem}
									onPress={categoryHandler(item.name)}
									textStyle={{ fontSize: 20 }}
								>
									{item.name}
								</Chip>
							)}
						/>
					</View>
					<View style={styles.colorContainer}>
						<Title style={styles.title}>Colors</Title>
						<FlatList
							horizontal={true}
							data={colorList}
							keyExtractor={(item) => item.key}
							extraData={refresh}
							renderItem={({ item }) =>
								item.selected ? (
									<Chip
										style={[
											styles.categoryItem,
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
												styles.categoryItem,
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
				</>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 30,
		width: "85%",
	},
	title: {
		textAlign: "center",
		paddingBottom: 10,
	},
	input: {
		borderColor: "#dddddd",
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
	catgoryContainer: {
		marginTop: 30,
		maxHeight: "15%",
	},
	categoryItem: {
		marginLeft: 8,
		marginRight: 8,
	},
	colorContainer: {
		marginTop: 30,
		maxHeight: "15%",
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
		color: (action) => dispatch(action),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatingHabit)
