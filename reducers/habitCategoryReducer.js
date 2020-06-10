export const habitCategory = [
	{ name: "hobbies", key: "1" },
	{ name: "chores", key: "2" },
	{ name: "health", key: "3" },
	{ name: "money", key: "4" },
	{ name: "relationship", key: "5" },
	{ name: "others", key: "6" },
	{ name: "fitness", key: "7" },
]

export const selectedCategory = (state = null, action) => {
	switch (action.type) {
		case "ADD_CATEGORY":
			return state
		case "DELETE_CATEGORY":
			return state
		default:
			return state
	}
}
