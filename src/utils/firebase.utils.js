import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCGKBLDYocS0qhEeioYOKhIAVepWinKS54",
	authDomain: "crwn-clothing-17c13.firebaseapp.com",
	projectId: "crwn-clothing-17c13",
	storageBucket: "crwn-clothing-17c13.appspot.com",
	messagingSenderId: "386095311293",
	appId: "1:386095311293:web:edbe04d7c11e9de9084ad4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
//there can be multiple ways for a single sign-in method

googleProvider.setCustomParameters({
	prompt: "select_account",
});
export const auth = getAuth(); //singleton authentication
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //also singleton - points to database in firestore

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);
	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});
	await batch.commit();
	console.log("done ");
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, "categories");
	const q = query(collectionRef);
	const querySnapshot = await getDocs(q);
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});
	return categoryMap;
};

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;
	const userDocRef = doc(db, "users", userAuth.uid);
	//it returns userDocRefernce to setUserData - type=>
	//fh {converter: null, _key: ht, type: 'document', firestore: vh}
	console.log("user doc ref", userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// return user snapshot
	//sf {_firestore: vh, _userDataWriter: hf, _key: ht, _document: null, _converter: null, …}
	console.log("user snapshot", userSnapshot);

	console.log("user snapshot exists?", userSnapshot.exists()); //gives false as we didn't setUser data in the database

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);

// @param auth — The Auth instance.
// @param nextOrObserver — callback triggered on change.
// next: (callback)
