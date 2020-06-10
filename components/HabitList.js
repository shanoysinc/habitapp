import React from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"
import { Card, Title, Paragraph } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
const Home = ({ habitList }) => {
	console.log("mama", habitList)
	return (
		<View style={styles.cardContainer}>
			<FlatList
				data={habitList}
				keyExtractor={(item) => item.key}
				numColumns={2}
				renderItem={({ item }) => (
					<Card style={styles.card}>
						<Image
							source={icons.images.fitness}
							style={styles.iconImage}
						/>
						<Card.Content>
							<Title style={styles.cardTilte}>{item.name}</Title>
							<Paragraph style={styles.cardText}>
								{item.category}
							</Paragraph>
						</Card.Content>
					</Card>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: "47%",
		margin: 5,
		elevation: 3,
	},
	cardContainer: {
		padding: 20,
	},
	iconImage: {
		height: 30,
		width: 30,
		marginLeft: 12,
		marginTop: 10,
	},
	cardTilte: {
		fontSize: 16,
		paddingTop: 20,
		fontWeight: "bold",
		lineHeight: 0,
	},
	cardText: {
		fontSize: 12,
		lineHeight: 0,
	},
})

const mapStateToProps = (state) => {
	console.log(state.habitListReducer)
	return {
		habitList: state.habitListReducer,
	}
}
export default connect(mapStateToProps)(Home)
