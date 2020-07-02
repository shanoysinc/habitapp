import AsyncStorage from "@react-native-community/async-storage"

export const increaseProductivity = () => {
	return {
		type: "INCREASE_PRODUCTIVITY",
	}
}

export const decreaseProductivity = () => {
	return {
		type: "DECREASE_PRODUCTIVITY",
	}
}

export const getProductiveDay = () => {
	return async (dispatch) => {
		const data = await AsyncStorage.getItem("productiveDay")
		const parse = JSON.parse(data)
		console.log("parse", parse)
		return dispatch({
			type: "FETCH_OVERALL_DISCIPLINE_LEVELS",
			data: parse,
		})
	}
}
