export const creatingHabit = (data) => {
	return {
		type: "CREATING_HABIT",
		habit: data,
	}
}

export const deleteCategory = (data) => {
	return {
		type: "DELETE_NEW_HABIT",
		habit: data,
	}
}
