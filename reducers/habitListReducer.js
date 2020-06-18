const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#20FC8F",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#FF4081",
	},
	{
		name: "learn to code",
		key: "3",
		category: "relationship",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#4ECDC4",
	},
	{
		name: "Go out side",
		key: "4",
		category: "health",
		daysCompleted: {},
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
		default:
			return state
	}
}

export default habitListReducer
