export const habitColor = [
	{ color: "rgb(105, 240, 174)", key: "3", selected: false },
	{ color: "rgb(78, 205, 196)", key: "4", selected: false },
	{ color: "rgb(255, 171, 145)", key: "5", selected: false },
	{ color: "rgb(244, 143, 177)", key: "6", selected: false },
	{ color: "rgb(129, 212, 250)", key: "7", selected: false },
	{ color: "rgb(240, 98, 146)", key: "8", selected: false },
	{ color: "rgb(206, 147, 216)", key: "9", selected: false },
	{ color: "rgb(103, 230, 220)", key: "10", selected: false },
	{ color: "rgb(255, 224, 130)", key: "11", selected: false },
	{ color: "rgb(0, 204, 205)", key: "12", selected: false },
	// { color: "rgb(0, 172, 193)", key: "13", selected: false },
	{ color: "rgb(245, 188, 186)", key: "14", selected: false },
	{ color: "rgb(176, 190, 197)", key: "15", selected: false },
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
