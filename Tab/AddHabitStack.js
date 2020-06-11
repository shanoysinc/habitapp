import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AddHabits from "../screens/AddHabits"

const Stack = createStackNavigator()

const AddHabitStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="CreateHabits" component={AddHabits} />
		</Stack.Navigator>
	)
}

export default AddHabitStack
