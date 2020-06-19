export const habitColor = [
	{ color: "rgb(32, 252, 143)", key: "3", selected: false },
	{ color: "rgb(78, 205, 196)", key: "4", selected: false },
	{ color: "rgb(255, 230, 109)", key: "5", selected: false },
	{ color: "rgb(255, 112, 67)", key: "6", selected: false },
	{ color: "rgb(1, 186, 239)", key: "7", selected: false },
	{ color: "rgb(255, 64, 129)", key: "8", selected: false },
	{ color: "rgb(186, 104, 200)", key: "9", selected: false },
]

const habitsColorReducer = (state = habitColor, action) => {
	switch (action.type) {
		case "SELECTED_COLOR":
			state.find((col) => {
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
