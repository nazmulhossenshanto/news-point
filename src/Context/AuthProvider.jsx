import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

 
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // Sign in user with google account
    const googleSingIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    };
    // sign out logged in user
    const signOutUser = ()=>{
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
       signOutUser,
       user,
       loading
    }
  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  )
}

export default AuthProvider