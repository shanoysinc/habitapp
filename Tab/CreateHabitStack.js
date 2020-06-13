import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HabitCategoryList from "../components/HabitCategoryList"
import { NavigationContainer } from "@react-navigation/native"
import NewHabit from "../components/NewHabit"

const Stack = createStackNavigator()

const CreateHabitStack = () => {
	return (
		// <NavigationContainer independent={true}>
		<Stack.Navigator>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: "#6200ee",
						height: 100,
					},
					headerTintColor: "white",
				}}
				name="Create Your Habits"
				component={NewHabit}
			/>
			{/* <Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: "#6200ee",
					},
					headerTintColor: "white",
				}}
				name="HabitCategory"
				component={HabitCategoryList}
			/> */}
		</Stack.Navigator>
		//	</NavigationContainer>
	)
}

export default CreateHabitStack
