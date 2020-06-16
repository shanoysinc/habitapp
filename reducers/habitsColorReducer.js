export const habitColor = [
	{ color: "#CA054D", key: "1", selected: false },
	{ color: "#C60F7B", key: "2", selected: false },
	{ color: "#20FC8F", key: "3", selected: false },
	{ color: "#4ECDC4", key: "4", selected: false },
	{ color: "#FFE66D", key: "5", selected: false },
	{ color: "#FF6542", key: "6", selected: false },
	{ color: "#01BAEF", key: "7", selected: false },
]

const habitsColorReducer = (state = habitColor, action) => {
	switch (action.type) {
		case "SELECTED_COLOR":
			state.find(col => {
				if (col.key == action.key) {
					col.selected = true
				} else {
					col.selected = false
				}
			})
			return state
		default:
			return state
	}
}

export default habitsColorReducer
