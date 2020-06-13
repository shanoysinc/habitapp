export const habitCategory = [
	{ name: "hobbies", key: "1", btnColor: "#CA054D" },
	{ name: "chores", key: "2", btnColor: "#C60F7B" },
	{ name: "health", key: "3", btnColor: "#20FC8F" },
	{ name: "money", key: "4", btnColor: "#4ECDC4" },
	{ name: "relationship", key: "5", btnColor: "#FFE66D" },
	{ name: "others", key: "6", btnColor: "#FF6542" },
	{ name: "fitness", key: "7", btnColor: "#01BAEF" },
]

const habitsCategoryList = (state = habitCategory, action) => {
	switch (action.type) {
		case "ADD_CATEGORY":
			return state
		case "DELETE_CATEGORY":
			return state
		default:
			return state
	}
}

export default habitsCategoryList
