import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Title, Chip, Button } from "react-native-paper"

const HabitCategoryList = ({ categoryList }) => {
	return (
		<View>
			<Title style={styles.title}>Category</Title>
			<>
				<FlatList
					data={categoryList}
					keyExtractor={(item) => item.key}
					renderItem={({ item }) => (
						<TouchableOpacity>
							<Chip style={styles.categoryItem}>{item.name}</Chip>
						</TouchableOpacity>
					)}
				/>
				<Button
					mode="contained"
					style={{
						width: "85%",
						height: 50,
						marginTop: 20,
					}}
					labelStyle={{ fontSize: 28 }}
				>
					Next
				</Button>
			</>
		</View>
	)
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#f4f6ff",
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
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: (action) => dispatch(action),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitCategoryList)
