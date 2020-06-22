import moment from "moment"
const date = moment().format("MMM Do YY")
// const tomorrowDate = moment().add(1, "day").format("MMM Do YY")

const habitList = [
	{
		name: "reading",
		key: "1",
		category: "education",
		bezierChart: [
			{
				data: [1, 10, 22],
			},
		],
		disciplinePercentage: 100,
		typeOfHabit: "habit",
		color: "rgb(245, 188, 186)",
		log: [{ date: "Jun 20th 20", complete: false, percentageLog: 0 }],
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		bezierChart: [
			{
				data: [42, 54, 76],
			},
		],
		disciplinePercentage: 76,
		typeOfHabit: "habit",
		color: "rgb(129, 212, 250)",
		log: [{ date: "Jun 20th 20", complete: false, percentageLog: 0 }],
	},
	{
		name: "Learn to code",
		key: "22",
		category: "hobbies",
		bezierChart: [
			{
				data: [42, 82, 91],
			},
		],
		disciplinePercentage: 91,
		typeOfHabit: "habit",
		color: "rgb(103, 230, 220)",
		log: [{ date: "Jun 20th 20", complete: false, percentageLog: 0 }],
	},
]

const habitListReducer = (state = habitList, action) => {
	switch (action.type) {
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
			//console.log(state)
			return state
		case "REMOVE_DATA_TO_BEZIER":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.bezierChart[0].data.pop()
				}
			})
			//console.log(state)
			return state
		case "INCREASE_HABIT_PERCENTAGE":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.disciplinePercentage += 4
				}
			})
			return state
		case "LOG_HABIT_FOR_THE_DAY":
			const updateLog = (currentDate) => {
				if (currentDate.date == date) {
					currentDate.complete = true

					return currentDate.complete
				}
			}

			state.find((habit) => {
				if (habit.key == action.key) {
					habit.log.find((currentDate) => {
						updateLog(currentDate)
					})
				}
			})

			return state
		case "UNDO_HABIT_LOG":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.disciplinePercentage -= 4
					habit.log.find((currentDate) => {
						if (currentDate.date == date) {
							currentDate.complete = false
							return currentDate.complete
						}
					})
				}
			})
			return state
		case "ADD_CURRENT_DATE_TO_HABITS":
			state.map((habits) => {
				habits.log.push({
					date: date,
					complete: false,
					percentageLog: 0,
				})
			})
			// console.log(state)
			return state
		default:
			return state
	}
}

export default habitListReducer
