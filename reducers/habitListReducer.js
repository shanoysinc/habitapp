const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#f44336",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#673AB7",
	},
	{
		name: "Reading",
		key: "3",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#2196F3",
	},
	{
		name: "Meditation",
		key: "4",
		category: "health",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#00BCD4",
	},
	{
		name: "Run",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#4CAF50",
	},
	{
		name: "Learn React-Native",
		key: "32",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#37474F",
	},
	{
		name: "Cooking",
		key: "42",
		category: "health",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
		color: "#FFC107",
	},
]

const habitListReducer = (state = habitList, action) => {
	switch (action.type) {
		case "ADD_TO_HABIT_LIST":
			return state
		case "DELETE_FROM_HABIT_LIST":
			return state
		default:
			return state
	}
}

export default habitListReducer
