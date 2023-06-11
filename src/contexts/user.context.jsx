import { createContext, useEffect, useReducer, useState } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};
		default:
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};
const INITIAL_STATE = {
	currentUser: null,
};

export const UserProvider = ({ children }) => {
	//  const [currentUser, setCurrentUser] = useState(null);
	//  We are using useReducer now =>

	// const [{currentUser},dispatch]  = useReducer(userReducer,INITIAL_STATE)
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;

	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};

	// const value = {currentUser: currentUser,setCurrentUser:setCurrentUser};
	const value = { currentUser, setCurrentUser };

	//other way to see logged-in or logged out
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				await createUserDocumentFromAuth(user);
				// console.log("doc ref", docref);
			}
			setCurrentUser(user);
			// console.log(user);
		});
		return unsubscribe;
		//return calls when unmount -> unsubscribe when unmount - stops onAuthStateChangeListener listening
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
