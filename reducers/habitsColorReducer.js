export const habitColor = [
	{ color: "rgb(32, 252, 143)", key: "3", selected: false },
	{ color: "rgb(78, 205, 196)", key: "4", selected: false },
	{ color: "rgb(255, 62, 77)", key: "5", selected: false },
	// { color: "rgb(250, 196, 47)", key: "6", selected: false },
	{ color: "rgb(1, 186, 239)", key: "7", selected: false },
	{ color: "rgb(255, 64, 129)", key: "8", selected: false },
	{ color: "rgb(186, 104, 200)", key: "9", selected: false },
	{ color: "rgb(103, 230, 220)", key: "10", selected: false },
	{ color: "rgb(46, 204, 114)", key: "11", selected: false },
	{ color: "rgb(0, 204, 205)", key: "12", selected: false },
	{ color: "rgb(139, 120, 230)", key: "13", selected: false },
	{ color: "rgb(245, 188, 186)", key: "14", selected: false },
	{ color: "rgb(220, 230, 231)", key: "15", selected: false },
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
