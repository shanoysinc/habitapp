import moment from "moment"

// const tomorrowDate = moment().add(1, "day").format("MMM Do YY")
// const date = moment().format("MMM Do YY")

const currentDateReducer = (state = "June 20th 20", action) => {
	switch (action.type) {
		case "UPDATE_CURRENT_DATE":
			state = moment().format("MMM Do YY")
			return state
		default:
			return state
	}
}

export default currentDateReducer
