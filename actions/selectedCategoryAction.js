export const selectedCategory = (data) => {
	return {
		type: "SELECTED_CATEGORY",
		habit: data,
	}
}

export const deleteSelectedCategory = (data) => {
	return {
		type: "DELETE_SELECTED_CATEGORY",
		habit: data,
	}
}
