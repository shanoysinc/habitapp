import moment from "moment"
const date = moment().format("MMM Do YY")
const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		bezierChart: [
			{
				data: [1, 10, 22],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "rgb(1, 186, 239)",
		log: [{ date: "Jun 21st 20", complete: false, percentageLog: 0 }],
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		bezierChart: [
			{
				data: [42, 82, 12],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "rgb(46, 204, 114)",
		log: [{ date: "Jun 21st 20", complete: false, percentageLog: 0 }],
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
					habit.log.find((currentDate) => {
						if (currentDate.date == date) {
							currentDate.complete = true
							return currentDate.complete
						}
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
		default:
			return state
	}
}

export default habitListReducer
