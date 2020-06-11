import React from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	FlatList,
} from "react-native"
import { colorBg } from "../global/global"
import Header from "../components/Header"
import { TextInput, Title, Chip } from "react-native-paper"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler"
import { selectedCategory } from "../actions/selectedCategoryAction"

const AddHabits = ({ categoryList, selectedCategory, selectCat }) => {
	console.log("yesbaby", selectedCategory)
	const selectCategoryHandler = (category) => {
		return () => selectCat(category)
	}
	return (
		<>
			<Header />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={[colorBg, styles.itemContainer]}>
					<Title>Create your new Habit</Title>

					<TextInput
						style={styles.textInput}
						label="Habit name"
						underlineColor="white"
					/>
				</View>
			</TouchableWithoutFeedback>
			<View style={styles.categoryList}>
				<Title style={styles.title}>Category</Title>
				<>
					<FlatList
						horizontal={true}
						data={categoryList}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Chip
									style={styles.categoryItem}
									onPress={selectCategoryHandler(item.name)}
								>
									{item.name}
								</Chip>
							</TouchableOpacity>
						)}
					/>
				</>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	textInput: {
		marginTop: 10,
		width: "80%",
		backgroundColor: "white",
	},
	itemContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#f4f6ff",
	},
	categoryList: {
		marginTop: 220,
		position: "absolute",
	},
	title: {
		textAlign: "center",
	},
	categoryItem: {
		margin: 10,
	},
})

const mapStateToProps = (state) => {
	return {
		categoryList: state.habitCategoryReducer,
		selectedCategory: state.selectedCategoryReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectCat: (action) => dispatch(action),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHabits)
