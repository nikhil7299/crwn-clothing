import { compose, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
	key: "root",
	storage: storage,
	blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
// const middlewares = [logger];
const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
	Boolean
);
//if false ==> returns empty Array = []

//Redux DEV Tools chrome extension
const composeReduxDevTools =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
//For Redux DEV TOOLS => use Modified Compose instead of redux's compose
const composedEnhancers = composeReduxDevTools(applyMiddleware(...middlewares));
// const composedEnhancers = compose(applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);

//Using persisted Reducer to persist rootReducer data =>
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);
