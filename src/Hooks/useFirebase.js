import { useState } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init"
import { useEffect } from "react";


//firebase initialized here
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    //get auth called
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    ///google sign method implemented
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };

    //log out implemented
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])
    
    return{
        user,
        isLoading,
        signInUsingGoogle,
        setError,
        logOut
    }

}

export default useFirebase