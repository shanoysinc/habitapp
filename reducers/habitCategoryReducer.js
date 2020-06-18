export const habitCategory = [
	{ name: "hobbies", key: "1", selected: false },
	{ name: "education", key: "2", selected: false },
	{ name: "health", key: "3", selected: false },
	{ name: "money", key: "4", selected: false },
	{ name: "relationship", key: "5", selected: false },
	{ name: "others", key: "6", selected: false },
	{ name: "fitness", key: "7", selected: false },
	{ name: "well Being", key: "8", selected: false },
]

const habitsCategoryList = (state = habitCategory, action) => {
	switch (action.type) {
		case "SELECTED_CATEGORY":
			state.find((cat) => {
				if (cat.key == action.key) {
					cat.selected = true
				} else {
					cat.selected = false
				}
			})
			return state
		default:
			return state
	}
}

export default habitsCategoryList
