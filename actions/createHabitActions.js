export const createHabit = (data) => {
	return {
		type: "ADD_TO_HABIT_LIST",
		payload: data,
	}
}
