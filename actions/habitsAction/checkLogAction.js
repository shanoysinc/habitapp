export const undoHabitLog = (key) => {
	return {
		type: "UNDO_HABIT_LOG",
		key,
	}
}
