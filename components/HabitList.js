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
				<View style={styles.todaysSeciton}>
					<Title style={styles.title}>Today</Title>
					<Card
						style={[
							styles.todaysCard,
							{ backgroundColor: "#FFE66D" },
						]}
					>
						<Card.Content>
							<Title style={styles.todaysTitle}>Exercise</Title>
							<Paragraph style={styles.todaysParagraph}>
								Fitness
							</Paragraph>
						</Card.Content>
					</Card>
				</View>

				<View style={styles.habitsSeciton}>
					<Card
						style={[
							styles.habitCard,
							,
							{ backgroundColor: "#FF4081" },
						]}
					>
						<Card.Content>
							<Title
								style={[styles.textCenter, styles.cardTitle]}
							>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>67%</Title>
							<Image
								source={icons.images.education}
								style={styles.iconImage}
							/>
						</Card.Content>
					</Card>
					<Card
						style={[
							styles.habitCard,
							,
							{ backgroundColor: "#00E5FF" },
						]}
					>
						<Card.Content>
							<Title
								style={[styles.textCenter, styles.cardTitle]}
							>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>100%</Title>
							<Image
								source={icons.images.health}
								style={styles.iconImage}
							/>
						</Card.Content>
					</Card>
					<Card
						style={[
							styles.habitCard,
							,
							{ backgroundColor: "#BA68C8" },
						]}
					>
						<Card.Content>
							<Title
								style={[styles.textCenter, styles.cardTitle]}
							>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>17%</Title>
							<Image
								source={icons.images.hobbies}
								style={styles.iconImage}
							/>
						</Card.Content>
					</Card>
					<Card
						style={[
							styles.habitCard,
							,
							{ backgroundColor: "#FFC400" },
						]}
					>
						<Card.Content>
							<Title
								style={[styles.textCenter, styles.cardTitle]}
							>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>2%</Title>
							<Image
								source={icons.images.meditation}
								style={styles.iconImage}
							/>
						</Card.Content>
					</Card>
				</View>

				{/* <FlatList
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
							<Button
								mode="contained"
								labelStyle={{ fontSize: 12 }}
								style={{
									backgroundColor: item.btnColor,
									borderRadius: 0,
								}}
							>
								Great
							</Button>
						</Card>
					</TouchableOpacity>
				)}
			/> */}
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
	},
	todaysCard: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: "52%",
		backgroundColor: "#FAFAFA",
		elevation: 3,
	},
	todaysTitle: {
		fontSize: 28,
	},
	todaysParagraph: {
		fontSize: 15,
	},

	habitsSeciton: {
		position: "absolute",
		marginTop: 160,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	habitCard: {
		margin: 5,
		height: 140,
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
