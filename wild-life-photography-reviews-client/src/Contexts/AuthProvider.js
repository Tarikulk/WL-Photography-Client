import React, { createContext, useEffect, useState} from 'react';
import app from '../Firebase/Firebase.config';
import {getAuth, onAuthStateChanged} from "firebase/auth"

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            return setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;