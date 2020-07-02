import AsyncStorage from "@react-native-community/async-storage"

export const increaseDisciplinePercentage = () => {
	return {
		type: "INCREASE_OVERALL_DISCIPLINE_LEVELS",
	}
}

export const undoDisciplinePercentage = () => {
	return {
		type: "UNDO_OVERALL_DISCIPLINE_LEVELS",
	}
}

export const getDisciplinePercentage = () => {
	return async (dispatch) => {
		const data = await AsyncStorage.getItem("overallDiscipline")
		//console.log("dpercen", JSON.parse(data))
		return dispatch({
			type: "FETCH_OVERALL_DISCIPLINE_LEVELS",
			data: JSON.parse(data),
		})
	}
}
