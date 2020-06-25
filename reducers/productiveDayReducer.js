import moment from "moment"

// const tomorrowDate = moment().add(1, "day").format("MMM Do YY")
// const date = moment().format("MMM Do YY")
const daysOfTheWeek = {
	Monday: 1,
	Tuesday: 1,
	Wednesday: 1,
	Thursday: 1,
	Friday: 1,
	Saturday: 1,
	Sunday: 2,
}
const day = moment().format("dddd")

const productiveDayReducer = (state = daysOfTheWeek, action) => {
	switch (action.type) {
		case "INCREASE_PRODUCTIVITY":
			state[day] += 1
			return state
		case "DECREASE_PRODUCTIVITY":
			state[day] -= 1
			return state
		default:
			return state
	}
}

export default productiveDayReducer
