import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.confug";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSuscrib = onAuthStateChanged(auth, currenUser => {
            console.log(currenUser)
            const tokenUser = currenUser?.user || user?.email
            if (currenUser) {
                setUser(currenUser)
                setLoader(false)
                const userEmail = { email: tokenUser }
                axios.post("http://localhost:5000/jwt", userEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            else {
                const logoutUser = { email: tokenUser }
                axios.post("http://localhost:5000/logout", logoutUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                setUser(null)
            }
            setLoader(false)
        });
        return () => unSuscrib()
    }, [])



    const authInfo = { user, loader, setLoader, createUser, logOut, loginUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;