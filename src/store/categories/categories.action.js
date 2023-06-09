import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.action-types";

export const setCategories = (categoriesArray) =>
	createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
