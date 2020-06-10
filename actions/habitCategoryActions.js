export const addCategory = (data) => {
	return {
		type: "ADD_CATEGORY",
		habit: data,
	}
}

export const deleteCategory = (data) => {
	return {
		type: "DELETE_CATEGORY",
		habit: data,
	}
}
