const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		bezierChart: [
			{
				data: [],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#20FC8F",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		bezierChart: [
			{
				data: [],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#FF4081",
	},
	{
		name: "learn to code",
		key: "3",
		category: "relationship",
		bezierChart: [
			{
				data: [],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#4ECDC4",
	},
	{
		name: "Go out side",
		key: "4",
		category: "health",
		bezierChart: [
			{
				data: [],
			},
		],
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#BA68C8",
	},
]

const habitListReducer = (state = habitList, action) => {
	switch (action.type) {
		case "ADD_TO_HABIT_LIST":
			return [action.payload, ...state]
		case "DELETE_FROM_HABIT_LIST":
			return state
		case "ADD_DATA_TO_BEZIER":
			return state
		case "INCREASE_HABIT_PERCENTAGE":
			state.find((habit) => {
				if (habit.key == action.key) {
					habit.disciplinePercentage += 4
				}
			})
			return state
		default:
			return state
	}
}

export default habitListReducer
