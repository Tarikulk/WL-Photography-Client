import React, { createContext, useEffect, useState} from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    const createUser = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    };
    
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    };

    const userLogout = () =>{
        return signOut(auth);
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            return setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, signInUser, googleLogin, updateUserProfile, githubLogin, userLogout};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;