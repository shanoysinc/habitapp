import moment from "moment"
const date = moment().format("MMM Do YY")
// const tomorrowDate = moment().add(1, "day").format("MMM Do YY")
import AsyncStorage from "@react-native-community/async-storage"

const habitList = [
	// {
	// 	name: "reading",
	// 	key: "1",
	// 	category: "Education",
	// 	bezierChart: [
	// 		{
	// 			data: [1, 10, 22, 14, 12, 10],
	// 		},
	// 	],
	// 	disciplinePercentage: 63,
	// 	typeOfHabit: "habit",
	// 	color: "rgb(129, 212, 250)",
	// 	log: { "Jun 20th 20": { complete: false, percentageLog: 0 } },
	// 	streak: 0,
	// 	lastDateOfLOG: "Jun 20th 20",
	// },
	// {
	// 	name: "exercise",
	// 	key: "2",
	// 	category: "Fitness",
	// 	bezierChart: [
	// 		{
	// 			data: [42, 54, 76],
	// 		},
	// 	],
	// 	disciplinePercentage: 90,
	// 	typeOfHabit: "habit",
	// 	color: "rgb(0, 204, 205)",
	// 	log: { "Jun 20th 20": { complete: false, percentageLog: 0 } },
	// 	streak: 0,
	// 	lastDateOfLOG: "Jun 20th 20",
	// },
	// {
	// 	name: "Learn to code",
	// 	key: "22",
	// 	category: "Hobbies",
	// 	bezierChart: [
	// 		{
	// 			data: [42, 82, 91],
	// 		},
	// 	],
	// 	disciplinePercentage: 91,
	// 	typeOfHabit: "habit",
	// 	color: "rgb(255, 171, 145)",
	// 	log: { "Jun 20th 20": { complete: false, percentageLog: 0 } },
	// 	streak: 0,
	// 	lastDateOfLOG: "Jun 20th 20",
	// },
]

const habitListReducer = (state = habitList, action) => {
	switch (action.type) {
		case "FETCHING_ASYNC_DATA":
			if (action.data === null) {
				return state
			} else {
				///console.log("who", action.data)
				return action.data
			}
		case "ADD_TO_HABIT_LIST":
			return [action.payload, ...state]
		case "DELETE_FROM_HABIT_LIST":
			return state
		case "ADD_DATA_TO_BEZIER":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.bezierChart[0].data.push(habit.disciplinePercentage)
				}
			})

			return state
		case "REMOVE_DATA_TO_BEZIER":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.bezierChart[0].data.pop()
				}
			})

			return state
		case "INCREASE_HABIT_PERCENTAGE":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.disciplinePercentage += 4
				}
			})

			return state
		case "LOG_HABIT_FOR_THE_DAY":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.log[date].complete = true
				}
			})

			return state
		case "UNDO_HABIT_LOG":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.disciplinePercentage -= 4
					habit.log[date].complete = false
				}
			})

			return state
		case "ADD_CURRENT_DATE_TO_HABITS":
			state.find((habits) => {
				if (!habits.log[date]) {
					habits.log[date] = {}
					habits.log[date].complete = false
					habits.log[date].percentageLog = 0
				}
			})

			return state
		default:
			return state
	}
}

export default habitListReducer
