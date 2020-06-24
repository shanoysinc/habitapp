const statisticsReducer = (state = 50, action) => {
	switch (action.type) {
		case "INCREASE_OVERALL_DISCIPLINE_LEVELS":
			if (state <= 100) {
				state += 2
			}
			return state
		case "DECREASE_OVERALL_DISCIPLINE_LEVELS":
			if (state <= 100) {
				state += 1
			}
			return state
		case "UNDO_OVERALL_DISCIPLINE_LEVELS":
			if (state >= 20) {
				state -= 2
			}
			return state
		default:
			return state
	}
}
export default statisticsReducer
