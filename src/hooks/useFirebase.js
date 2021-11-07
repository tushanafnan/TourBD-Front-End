import React,{useState, useEffect } from 'react';
import initializeAuthentication from './../Components/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword,createUserWithEmailAndPassword ,  onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
const auth = getAuth();
const [user,setUser]=useState({})
const [isLoading,setIsLoading]=useState(true);
const googleProvider= new GoogleAuthProvider();
 
const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
//         setIsLoading(true);
//    signInWithPopup(auth,googleProvider)
//    .then(result=>{
//     setUser(result.user)
//     setIsLoading(false);
//    }).catch(error=>{const errorCode = error.code;
//     const errorMessage = error.message;})}

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            } 
            else {
            }
            setIsLoading(false)
          });
        }, [])


    const loginUserWithEmail = (email, password) => {
        return signInWithEmailAndPassword (auth, email,password)
        // .then(result=>{
        //     setUser(result.user)
        
        
    }

    const registerUserWithEmail=(email, password)=> {
      return  createUserWithEmailAndPassword ( auth, email, password)
    }
    const handleLogOut = () => {
    signOut(auth).then(() => {
        setUser({});
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

    return {
        signInUsingGoogle,
        loginUserWithEmail,
        registerUserWithEmail,
        user,
        isLoading,
        handleLogOut
    }
};

export default useFirebase;