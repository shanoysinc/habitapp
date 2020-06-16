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
					<Card style={styles.todaysCard}>
						<Card.Content>
							<Title>Learn to code</Title>
							<Paragraph>Hobbies</Paragraph>
						</Card.Content>
					</Card>
				</View>

				<View style={styles.habitsSeciton}>
					<Card style={styles.habitCard}>
						<Card.Content>
							<Title style={styles.textCenter}>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>67%</Title>
						</Card.Content>
					</Card>
					<Card style={styles.habitCard}>
						<Card.Content>
							<Title style={styles.textCenter}>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>100%</Title>
						</Card.Content>
					</Card>
					<Card style={styles.habitCard}>
						<Card.Content>
							<Title style={styles.textCenter}>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>17%</Title>
						</Card.Content>
					</Card>
					<Card style={styles.habitCard}>
						<Card.Content>
							<Title style={styles.textCenter}>
								Learn to code
							</Title>
							<Paragraph style={styles.textCenter}>
								Hobbies
							</Paragraph>
							<Title style={styles.cardPercentage}>2%</Title>
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
		backgroundColor: "#EEEEEE",
		flex: 1,
	},

	title: {
		fontSize: 22,
		fontWeight: "bold",
	},
	body: {
		margin: 20,
	},
	todaysCard: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: "52%",
	},

	habitsSeciton: {
		position: "absolute",
		marginTop: 160,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	habitCard: {
		margin: 5,
		height: 165,
		width: 157,
	},
	textCenter: {
		textAlign: "center",
		fontSize: 15,
		lineHeight: 0,
	},
	cardPercentage: {
		textAlign: "center",
		fontSize: 30,
		marginTop: 20,
	},
	// card: {
	// 	width: "45%",
	// 	height: 100,
	// 	margin: 10,
	// 	marginBottom: 20,
	// },
	// cardItem: {
	// 	elevation: 4,
	// },
	// cardContainer: {
	// 	padding: 20,
	// 	height: "100%",
	// 	paddingBottom: 0,
	// },
	// iconImage: {
	// 	height: 27,
	// 	width: 25,
	// 	left: 90,
	// 	bottom: 10,
	// },
	// cardTilte: {
	// 	fontSize: 17,
	// 	fontWeight: "bold",
	// 	lineHeight: 0,
	// },
	// cardText: {
	// 	fontSize: 12,
	// 	lineHeight: 0,
	// },
	// cardContent: {
	// 	marginTop: -12,
	// },
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
	}
}
export default connect(mapStateToProps)(Home)
