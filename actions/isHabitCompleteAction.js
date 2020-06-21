export const isHabitComplete = (key) => {
	return {
		type: "LOG_HABIT_FOR_THE_DAY",
		key,
	}
}
