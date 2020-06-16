const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#01BAEF",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#FF6542",
	},
	{
		name: "Reading",
		key: "3",
		category: "hobbies",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#FFE66D",
	},
	{
		name: "Meditation",
		key: "4",
		category: "health",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#4ECDC4",
	},
	{
		name: "Run",
		key: "5",
		category: "fitness",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#20FC8F",
	},
	{
		name: "Learn React-Native",
		key: "32",
		category: "hobbies",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#C60F7B",
	},
	{
		name: "Cookings",
		key: "42",
		category: "health",
		daysCompleted: {},
		disciplinePercentage: 0,
		typeOfHabit: "habit",
		color: "#CA054D",
	},
]

const habitListReducer = (state = habitList, action) => {
	switch (action.type) {
		case "ADD_TO_HABIT_LIST":
			// let newHabit = action.payload
			// newHabit["key"] = "253"
			return [action.payload, ...state]
		case "DELETE_FROM_HABIT_LIST":
			return state
		default:
			return state
	}
}

export default habitListReducer
