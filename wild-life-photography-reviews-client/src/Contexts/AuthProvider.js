import React, { createContext, useEffect, useState} from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    };
    
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    };

    const userLogout = () =>{
        localStorage.removeItem("wl-photography");
        return signOut(auth);
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, signInUser, googleLogin, updateUserProfile, githubLogin, userLogout, loading};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;