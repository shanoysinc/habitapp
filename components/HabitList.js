import React from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native"
import { Card, Title, Paragraph, Button } from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"

const Home = ({ habitList }) => {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<Title style={styles.title}>Today</Title>
				<Card
					style={[styles.todaysCard, { backgroundColor: "#FFE66D" }]}
				>
					<Card.Content>
						<Title style={styles.todaysTitle}>Exercise</Title>
						<Paragraph style={styles.todaysParagraph}>
							Fitness
						</Paragraph>
					</Card.Content>
				</Card>

				<FlatList
					numColumns={2}
					data={habitList}
					showsVerticalScrollIndicator={false}
					windowSize={1}
					style={{ height: 1 }}
					renderItem={({ item }) => (
						<Card
							style={[
								styles.habitCard,
								,
								{ backgroundColor: item.color },
							]}
						>
							<Card.Content>
								<Title
									style={[
										styles.textCenter,
										styles.cardTitle,
									]}
								>
									{item.name}
								</Title>
								<Paragraph style={styles.textCenter}>
									{item.category}
								</Paragraph>
								<Title style={styles.cardPercentage}>16%</Title>
								<Image
									source={icons.images.category}
									style={styles.iconImage}
								/>
							</Card.Content>
						</Card>
					)}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},

	title: {
		fontSize: 22,
		fontWeight: "bold",
		// textAlign: "center",
	},
	body: {
		margin: 20,
		flex: 1,
	},

	todaysCard: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: "20%",
		backgroundColor: "#FAFAFA",
		elevation: 3,
		marginBottom: 12,
	},
	todaysTitle: {
		fontSize: 28,
	},
	todaysParagraph: {
		fontSize: 15,
	},

	habitCard: {
		margin: 5,
		height: 125,
		width: 157,
		elevation: 3,
	},
	textCenter: {
		textAlign: "center",
		fontSize: 15,
		lineHeight: 0,
	},
	cardTitle: {
		fontWeight: "bold",
		fontSize: 16,
	},
	cardPercentage: {
		textAlign: "center",
		fontSize: 32,
		marginTop: 10,
	},
	iconImage: {
		height: 20,
		width: 20,
		top: 105,
		right: 10,
		position: "absolute",
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
	}
}
export default connect(mapStateToProps)(Home)
