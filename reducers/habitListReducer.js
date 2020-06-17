const habitList = []

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
