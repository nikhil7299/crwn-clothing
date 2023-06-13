// import { createContext, useEffect, useState } from "react";

// // import SHOP_DATA from "../shop-data.js";
// import {
// 	// addCollectionAndDocuments,
// 	getCategoriesAndDocuments,
// } from "../utils/firebase.utils.js";

// export const CategoriesContext = createContext({
// 	categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
// 	const [categoriesMap, setCategoriesMap] = useState({});

// 	//   useEffect(() => {
// 	//     addCollectionAndDocuments("categories", SHOP_DATA);
// 	//   }, []);
// 	// console.log('contextpro', products);

// 	useEffect(() => {
// 		const getCategoriesMap = async () => {
// 			const categoryMap = await getCategoriesAndDocuments();
// 			// console.log(categoryMap);
// 			setCategoriesMap(categoryMap);
// 		};
// 		getCategoriesMap();
// 	}, []);

// 	const value = { categoriesMap };
// 	return (
// 		<CategoriesContext.Provider value={value}>
// 			{children}
// 		</CategoriesContext.Provider>
// 	);
// };
