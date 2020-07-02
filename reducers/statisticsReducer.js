import AsyncStorage from "@react-native-community/async-storage"

const statsData = async (state) => {
	try {
		let json = JSON.stringify(state)
		await AsyncStorage.setItem("overallDiscipline", json)
	} catch (err) {
		console.log(err)
	}
}

const statisticsReducer = (state = 50, action) => {
	switch (action.type) {
		case "FETCH_OVERALL_DISCIPLINE_LEVELS":
			if (action.data === null) {
				return state
			} else {
				return action.data
			}
		case "INCREASE_OVERALL_DISCIPLINE_LEVELS":
			if (state < 100) {
				state += 2
			}
			statsData(state)
			return state
		case "DECREASE_OVERALL_DISCIPLINE_LEVELS":
			if (state < 100) {
				state += 1
			}
			statsData(state)
			return state
		case "UNDO_OVERALL_DISCIPLINE_LEVELS":
			if (state > 20) {
				state -= 2
			}
			statsData(state)
			return state
		default:
			return state
	}
}
export default statisticsReducer
