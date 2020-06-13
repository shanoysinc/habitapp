const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#01BAEF",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#FF6542",
	},
	{
		name: "Reading",
		key: "3",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#FFE66D",
	},
	{
		name: "Meditation",
		key: "4",
		category: "health",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#4ECDC4",
	},
	{
		name: "Run",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#20FC8F",
	},
	{
		name: "Learn React-Native",
		key: "32",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#C60F7B",
	},
	{
		name: "Cookings",
		key: "42",
		category: "health",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		btnColor: "#CA054D",
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
