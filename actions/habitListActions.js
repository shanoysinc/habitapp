import AsyncStorage from "@react-native-community/async-storage"

export const increasePercentage = (key) => {
	return {
		type: "INCREASE_HABIT_PERCENTAGE",
		key,
	}
}

export const undoHabitLog = (key) => {
	return {
		type: "UNDO_HABIT_LOG",
		key,
	}
}

export const getHabitListData = () => {
	return async (dispatch) => {
		const list = await AsyncStorage.getItem("habitList")
		console.log("thisdata", JSON.parse(list))
		return dispatch({
			type: "FETCHING_ASYNC_DATA",
			data: JSON.parse(list),
		})
	}
}
