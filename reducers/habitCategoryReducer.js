export const habitCategory = [
	{ name: "Hobbies", key: "1", selected: false },
	{ name: "Education", key: "2", selected: false },
	{ name: "Health", key: "3", selected: false },
	{ name: "Money", key: "4", selected: false },
	{ name: "Relationship", key: "5", selected: false },
	{ name: "Others", key: "6", selected: false },
	{ name: "Fitness", key: "7", selected: false },
	{ name: "Well Being", key: "8", selected: false },
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
