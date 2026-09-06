import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { AuthContext } from "./AuthContext"
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

 
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const googleSingIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    };

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
       user,
       loading
    }
  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  )
}

export default AuthProvider