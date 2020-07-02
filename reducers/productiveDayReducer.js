import moment from "moment"
import AsyncStorage from "@react-native-community/async-storage"

// const tomorrowDate = moment().add(1, "day").format("MMM Do YY")
// const date = moment().format("MMM Do YY")
const daysOfTheWeek = [
	{
		Monday: 1,
		Tuesday: 1,
		Wednesday: 1,
		Thursday: 1,
		Friday: 1,
		Saturday: 1,
		Sunday: 2,
	},
]

// const day = moment().format("dddd")

const productiveData = async (state) => {
	try {
		let json = JSON.stringify(state)
		await AsyncStorage.setItem("productiveDay", json)
	} catch (err) {
		console.log(err)
	}
}
//productiveData(daysOfTheWeek)

// const getData = async () => {
// 	const list = await AsyncStorage.getItem("productiveDay")
// 	console.log("faaa", JSON.parse(list))
// 	return list != null ? JSON.parse(list) : null
// }
// getData()

const productiveDayReducer = (state = daysOfTheWeek, action) => {
	switch (action.type) {
		case "FETCH_OVERALL_DISCIPLINE_LEVELS":
			// console.log("dada", action.data)
			return action.data
		case "INCREASE_PRODUCTIVITY":
			// state[day] += 1
			productiveData(state)
			return state
		case "DECREASE_PRODUCTIVITY":
			// state[day] -= 1
			productiveData(state)
			return state
		default:
			return state
	}
}

export default productiveDayReducer
