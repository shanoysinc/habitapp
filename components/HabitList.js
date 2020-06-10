import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { Card, Title, Paragraph, Surface } from "react-native-paper"
import { icons } from "../global/global"

const Home = () => {
	return (
		<View style={styles.cardContainer}>
			<Card style={styles.card}>
				<Image source={icons.images.fitness} style={styles.iconImage} />
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>
			<Card style={styles.card}>
				<Image
					source={icons.images.relationship}
					style={styles.iconImage}
				/>
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>

			<Card style={styles.card}>
				<Image source={icons.images.others} style={styles.iconImage} />
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>

			<Card style={styles.card}>
				<Image source={icons.images.health} style={styles.iconImage} />
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>

			<Card style={styles.card}>
				<Image source={icons.images.money} style={styles.iconImage} />
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>
			<Card style={styles.card}>
				<Image source={icons.images.chores} style={styles.iconImage} />
				<Card.Content>
					<Title style={styles.cardTilte}>Learn to code</Title>
					<Paragraph style={styles.cardText}>Productivity</Paragraph>
				</Card.Content>
			</Card>
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
		flexDirection: "row",
		flexWrap: "wrap",
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

export default Home
