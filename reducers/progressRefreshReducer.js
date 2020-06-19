const progressRefreshReducer = (state = false, action) => {
	switch (action.type) {
		case "SET_REFRESH":
			let truthy = !state
			return truthy
		default:
			return state
	}
}
export default progressRefreshReducer
