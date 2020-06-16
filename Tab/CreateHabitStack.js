import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import NewHabit from "../components/NewHabit"

const Stack = createStackNavigator()

const CreateHabitStack = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator headerMode="none">
				<Stack.Screen
					// options={{
					// 	headerStyle: {
					// 		backgroundColor: "#7b2bed",
					// 		height: 70,
					// 	},
					// 	headerTintColor: "white",
					// }}
					name="Create Your Habits"
					component={NewHabit}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default CreateHabitStack
