const habitList = [
	{
		name: "learn to code",
		key: "1",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
	},
	{
		name: "exercise",
		key: "2",
		category: "fitness",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
	},
	{
		name: "Reading",
		key: "3",
		category: "hobbies",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
	},
	{
		name: "Meditation",
		key: "4",
		category: "health",
		daysCompleted: {},
		streaks: 0,
		typeOfHabit: "habit",
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
