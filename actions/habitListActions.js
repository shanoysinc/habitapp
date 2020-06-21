export const increasePercentage = (key) => {
	return {
		type: "INCREASE_HABIT_PERCENTAGE",
		key,
	}
}

export const undoHabitLog = (key) => {
	return {
		type: "UNDO_HABIT_LOG",
		key,
	}
}
