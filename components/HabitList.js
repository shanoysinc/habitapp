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
	console.log("mama", habitList)
	return (
		<View style={styles.cardContainer}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={habitList}
				keyExtractor={(item) => item.key}
				numColumns={2}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.card}>
						<Card style={styles.cardItem}>
							<Image
								source={icons.images[item.category]}
								style={styles.iconImage}
							/>
							<Card.Content>
								<Title style={styles.cardTilte}>
									{item.name}
								</Title>
								<Paragraph style={styles.cardText}>
									{item.category}
								</Paragraph>
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
		margin: 5,
	},
	cardItem: {
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
		paddingTop: 10,
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
