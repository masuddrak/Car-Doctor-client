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
        setLoader(true)
        const unSuscrib = onAuthStateChanged(auth, currenUser => {
            console.log(currenUser)


            setUser(currenUser)
            
            const tokenUser = currenUser?.user || user?.email
            const userEmail = { email: tokenUser }
            if (currenUser) {
                axios.post("http://localhost:5000/jwt", userEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
            else {
                axios.post("http://localhost:5000/logout", userEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            setLoader(false)

        });
        return () => unSuscrib()
    }, [user])



    const authInfo = { user, loader, setLoader, createUser, logOut, loginUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;