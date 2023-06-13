// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/reducer.utils";

// export const CartContext = createContext({
// 	isCartOpen: false,
// 	setIsCartOpen: () => {},
// 	cartItems: [],
// 	addItemToCart: () => {},
// 	removeItemFromCart: () => {},
// 	clearItemFromCart: () => {},
// 	cartCount: 0,
// 	cartTotal: 0,
// });

// // ADD CART ITEM
// const addCartItem = (cartItems, productToAdd) => {
// 	const existingCartItem = cartItems.find(
// 		(cartItem) => cartItem.id === productToAdd.id
// 	);

// 	if (existingCartItem) {
// 		return cartItems.map((cartItem) =>
// 			cartItem.id === productToAdd.id
// 				? { ...cartItem, quantity: cartItem.quantity + 1 }
// 				: cartItem
// 		);
// 	}

// 	return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// //REDUCE CART ITEM QUANTITY
// const removeCartItem = (cartItems, cartItemToRemove) => {
// 	const existingCartItem = cartItems.find(
// 		(cartItem) => cartItem.id === cartItemToRemove.id
// 	);
// 	if (existingCartItem.quantity === 1) {
// 		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// 	}
// 	return cartItems.map((cartItem) =>
// 		cartItem.id === cartItemToRemove.id
// 			? { ...cartItem, quantity: cartItem.quantity - 1 }
// 			: cartItem
// 	);
// };

// //REMOVE A CART ITEM
// const clearCartItem = (cartItems, cartItemToClear) =>
// 	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// //
// //? INITIAL STATE OBJECT
// const INITIAL_STATE = {
// 	isCartOpen: false,
// 	cartItems: [],
// 	cartCount: 0,
// 	cartTotal: 0,
// };

// const CART_ACTION_TYPES = {
// 	SET_CART_ITEMS: "SET_CART_ITEMS",
// 	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// //? CART-REDUCER
// const cartReducer = (state, action) => {
// 	const { type, payload } = action;
// 	switch (type) {
// 		case CART_ACTION_TYPES.SET_CART_ITEMS:
// 			return {
// 				...state,
// 				...payload,
// 			};
// 		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
// 			return {
// 				...state,
// 				isCartOpen: payload,
// 			};
// 		default:
// 			throw new Error(`Unhandled Type of ${type} in cartReducer`);
// 	}
// };

// export const CartProvider = ({ children }) => {
// 	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
// 	const { cartCount, cartItems, cartTotal, isCartOpen } = state;

// 	const updateCartItemsReducer = (newCartItems) => {
// 		const newCartTotal = newCartItems.reduce(
// 			(currentTotal, cartItem) =>
// 				currentTotal + cartItem.quantity * cartItem.price,
// 			0
// 		);
// 		const newCartCount = newCartItems.reduce(
// 			(currentTotal, cartItem) => currentTotal + cartItem.quantity,
// 			0
// 		);
// 		// dispatch({
// 		// 	type: CART_ACTION_TYPES.SET_CART_ITEMS,
// 		// 	payload: {
// 		// 		cartItems: newCartItems,
// 		// 		cartTotal: newCartTotal,
// 		// 		cartCount: newCartCount,
// 		// 	},
// 		// });
// 		dispatch(
// 			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
// 				cartItems: newCartItems,
// 				cartTotal: newCartTotal,
// 				cartCount: newCartCount,
// 			})
// 		);
// 	};

// 	const setIsCartOpen = (isCartOpen) => {
// 		// dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isCartOpen });
// 		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen));
// 	};

// 	const addItemToCart = (productToAdd) => {
// 		// setCartItems(addCartItem(cartItems, productToAdd));
// 		const newCartItems = addCartItem(cartItems, productToAdd);
// 		updateCartItemsReducer(newCartItems);
// 	};

// 	const removeItemFromCart = (cartItemToRemove) => {
// 		// setCartItems(removeCartItem(cartItems, cartItemToRemove));
// 		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
// 		updateCartItemsReducer(newCartItems);
// 	};
// 	const clearItemFromCart = (cartItemToClear) => {
// 		// setCartItems(clearCartItem(cartItems, cartItemToClear));
// 		const newCartItems = clearCartItem(cartItems, cartItemToClear);
// 		updateCartItemsReducer(newCartItems);
// 	};

// 	const value = {
// 		isCartOpen,
// 		setIsCartOpen,
// 		addItemToCart,
// 		cartItems,
// 		cartCount,
// 		removeItemFromCart,
// 		clearItemFromCart,
// 		cartTotal,
// 	};

// 	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

// /*
// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   useEffect(() => {
//     const newCartCount = cartItems.reduce(
//       (currentTotal, cartItem) => currentTotal + cartItem.quantity,
//       0
//     );

//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     if (cartItems.length) {
//       const newCartTotal = cartItems.reduce(
//         (currentTotal, cartItem) =>
//           currentTotal + cartItem.quantity * cartItem.price,
//         0
//       );
//       console.log("new cart count", newCartTotal);
//       setCartTotal(newCartTotal);
//     } else setCartTotal(0);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemFromCart = (cartItemToRemove) => {
//     setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   };
//   const clearItemFromCart = (cartItemToClear) => {
//     setCartItems(clearCartItem(cartItems, cartItemToClear));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     cartCount,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
// */
