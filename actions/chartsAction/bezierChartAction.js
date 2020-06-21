export const addToBezierChart = (key) => {
	return {
		type: "ADD_DATA_TO_BEZIER",
		key,
	}
}

export const removeCurrentDayLogFromBezierChart = (key) => {
	return {
		type: "REMOVE_DATA_TO_BEZIER",
		key,
	}
}
