import { CATEGORIES_ACTION_TYPES } from "./categories.action-types";

export const CATEGORIES_INITIAL_STATE = {
	categoriesArray: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
	const { type, payload } = action;
	// console.log("categories action type", type);
	// console.log("categories payload", payload);

	switch (type) {
		case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
			return {
				...state,
				categoriesArray: payload,
			};
		default:
			return state;
	}
};
