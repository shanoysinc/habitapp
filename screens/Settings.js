import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { colorBg } from "../global/global"
import { List, Title, Surface } from "react-native-paper"

const Settings = () => {
	return (
		<View style={colorBg}>
			<View>
				<Title style={styles.title}>Settings</Title>
				<Surface style={styles.mainContainer}>
					<List.Item
						title="Follow us on twitter"
						left={(props) => (
							<List.Icon {...props} icon="twitter" />
						)}
						right={(props) => (
							<List.Icon {...props} icon="chevron-right" />
						)}
					/>
					<List.Item
						title="Send us a feedback"
						left={(props) => (
							<List.Icon {...props} icon="comment" />
						)}
						right={(props) => (
							<List.Icon {...props} icon="chevron-right" />
						)}
					/>
					<List.Item
						title="Rate on the appStore"
						left={(props) => <List.Icon {...props} icon="star" />}
						right={(props) => (
							<List.Icon {...props} icon="chevron-right" />
						)}
					/>
					<List.Item
						title="Privacy Policy"
						left={(props) => <List.Icon {...props} icon="shield" />}
						right={(props) => (
							<List.Icon {...props} icon="chevron-right" />
						)}
					/>
				</Surface>
			</View>
			<Text style={styles.creatorText}>Create by Shanoy Sinc </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		marginTop: "10%",
		fontSize: 24,
	},
	mainContainer: {
		marginTop: "10%",
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 10,
		elevation: 2,
	},
	creatorText: {
		fontSize: 15,
		marginTop: "5%",
		textAlign: "center",
	},
})
export default Settings
