export const addToBezierChart = (key, data) => {
	return {
		type: "ADD_DATA_TO_BEZIER",
		key,
		data,
	}
}
