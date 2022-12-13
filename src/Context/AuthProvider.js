import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'



export const AuthContex = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoadign] = useState(true)
  


    const signup = (email, password)=>{
        setLoadign(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }


    const login =(email, password)=>{
        setLoadign(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileupdate =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const logout =()=>{
        setLoadign(true)
        return signOut(auth)
    }


    const googleUser=(provider)=>{
        setLoadign(true)
        return signInWithPopup(auth, provider)
    }



    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoadign(false)

        })
        return () => unsubscrib()
    },[])


    const authInfo = {user, loading,  signup, login, googleUser, profileupdate, logout,}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;