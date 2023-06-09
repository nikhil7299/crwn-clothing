import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const value = {currentUser: currentUser,setCurrentUser:setCurrentUser};
    const value = { currentUser, setCurrentUser };

    //other way to see loggedin or logged out
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                const docref = await createUserDocumentFromAuth(user);
                console.log('doc ref', docref);
            }
            setCurrentUser(user);
            console.log(user);
        })
        return unsubscribe
        //return calls when unmount -> unsubscribe when unmount - stops onAuthStateChangeListener listening
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}