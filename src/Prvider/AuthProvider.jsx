import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.confug";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unSuscrib = onAuthStateChanged(auth, currenUser => {
            if(currenUser){
                console.log(currenUser)
                setUser(currenUser)
                setLoader(false)
            }
               
             });
            //  return ()=>unSuscrib()
    }, [])



    const authInfo = { user, loader, setLoader, createUser,logOut,loginUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;