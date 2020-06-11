const selectedCategoryReducer = (state = null, action) => {
	switch (action.type) {
		case "SELECTED_CATEGORY":
			return state
		case "DELETE_SELECTED_CATEGORY":
			return state
		default:
			return state
	}
}

export default selectedCategoryReducer
