import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import { useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	//It does not change, but still we can pass it in useEffect dependency array
	//other way to see logged-in or logged out
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				await createUserDocumentFromAuth(user);
				// If it's already there then returns that one.
				// console.log("doc ref", docRef);
			}
			dispatch(setCurrentUser(user));

			// console.log(user);
		});
		return unsubscribe;
		//return calls when unmount -> unsubscribe when unmount - stops onAuthStateChangeListener listening
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index="true" element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
