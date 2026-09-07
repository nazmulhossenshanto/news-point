import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

 
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // Sign Up user with email and password
    const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign in user with google account
    const googleSingIn = ()=>{
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    // Sing in with email and password
    const signInWithEmail = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out logged in user
    const signOutUser = ()=>{
      setLoading(true)
      return signOut(auth)
    }

// On auth state change
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    setLoading(false)
  });
  return () => unsubscribe();
},[])

    const authInfo = {
       googleSingIn, 
       createUser,
       signInWithEmail,
       signOutUser,
       user,
       loading
    }
  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  )
}

export default AuthProvider