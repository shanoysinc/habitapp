import React, { useState } from "react"
import {
	StyleSheet,
	View,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native"
import {
	Card,
	Title,
	Paragraph,
	Button,
	Modal,
	Portal,
	Provider,
} from "react-native-paper"
import { icons } from "../global/global"
import { connect } from "react-redux"
import IsCompleteModal from "./IsCompleteModal"

const Home = ({ habitList }) => {
	const [visible, setVisible] = useState(false)
	const habitcompleteHandler = () => {
		console.log("habit complete")
		setVisible(true)
	}

	const dismissModal = () => {
		setVisible(false)
	}
	return (
		<Provider>
			<View style={styles.container}>
				<View style={styles.body}>
					<>
						<Portal>
							<Modal visible={visible} onDismiss={dismissModal}>
								<View style={styles.modalContainer}>
									<View style={styles.modalContent}>
										<Title style={styles.modalTitle}>
											Did you complete this habit today?
										</Title>
										<View
											style={styles.modalButtonContainer}
										>
											<Button
												mode="outlined"
												style={styles.modalBtn}
											>
												break
											</Button>
											<Button
												mode="contained"
												style={styles.modalBtn}
											>
												complete
											</Button>
										</View>
									</View>
								</View>
							</Modal>
						</Portal>
					</>
					<Title style={styles.title}>Today</Title>
					<Card
						style={[
							styles.todaysCard,
							{ backgroundColor: "#212121" },
						]}
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
						renderItem={({ item }) => (
							<Card
								style={[
									styles.habitCard,
									{ backgroundColor: item.color },
								]}
								onPress={habitcompleteHandler}
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
									<Title style={styles.cardPercentage}>
										{item.disciplinePercentage}%
									</Title>
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
		</Provider>
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
		marginBottom: 1, //show the bottom of the last item on habitlist
	},

	todaysCard: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: "20%",
		backgroundColor: "#FAFAFA",
		elevation: 3,
		marginBottom: 12,
		borderRadius: 10,
	},
	todaysTitle: {
		fontSize: 28,
		color: "white",
	},
	todaysParagraph: {
		fontSize: 15,
		color: "white",
	},

	habitCard: {
		borderRadius: 10,
		margin: 10,
		height: 130,
		width: 150,
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
		marginTop: 20,
	},
	iconImage: {
		height: 20,
		width: 20,
		top: 105,
		right: 10,
		position: "absolute",
	},
	modalContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		marginLeft: 35,
		marginRight: 50,
		backgroundColor: "white",
		height: 160,
		width: "75%",
		borderRadius: 10,
	},
	modalContent: {
		margin: 10,
	},
	modalTitle: {
		textAlign: "center",
		marginBottom: 20,
		color: "#9E9E9E",
	},
	modalButtonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	modalBtn: {
		height: 50,
		borderRadius: 10,
		paddingTop: 5,
		width: 120,
		marginLeft: 10,
	},
})

const mapStateToProps = (state) => {
	return {
		habitList: state.habitListReducer,
	}
}
export default connect(mapStateToProps)(Home)
