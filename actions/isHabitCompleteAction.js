export const isHabitComplete = (key) => {
	console.log("action")
	return {
		type: "LOG_HABIT_FOR_THE_DAY",
		key,
	}
}
