import React from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native"
import { Card, Title, Paragraph } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
const Home = ({ habitList }) => {
	//console.log("mama", habitList)
	return (
		<View style={styles.cardContainer}>
			<Title>Habits</Title>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={habitList}
				keyExtractor={(item) => item.key}
				numColumns={2}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.card}>
						<Card style={styles.cardItem}>
							<Card.Content>
								<View style={styles.cardContent}>
									<Title style={styles.cardTilte}>
										{item.name}
									</Title>

									<Paragraph style={styles.cardText}>
										{item.category}
									</Paragraph>
								</View>
								<Image
									source={icons.images[item.category]}
									style={styles.iconImage}
								/>
							</Card.Content>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: "45%",
		margin: 10,
	},
	cardItem: {
		elevation: 4,
	},
	cardContainer: {
		padding: 20,
		height: "100%",
	},
	iconImage: {
		height: 27,
		width: 25,
		left: 90,
		marginTop: 10,
	},
	cardTilte: {
		fontSize: 17,
		fontWeight: "bold",
		lineHeight: 0,
	},
	cardText: {
		fontSize: 12,
		lineHeight: 0,
	},
	cardContent: {
		marginTop: -12,
	},
})

const mapStateToProps = (state) => {
	//console.log(state.habitListReducer)
	return {
		habitList: state.habitListReducer,
	}
}
export default connect(mapStateToProps)(Home)
