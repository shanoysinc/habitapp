export const addHabit = (data) => {
	return {
		type: "ADD_TO_HABIT_LIST",
		habit: data,
	}
}

export const deleteHabit = (id) => {
	return {
		type: "DELETE_FROM_HABIT_LIST",
		id,
	}
}
