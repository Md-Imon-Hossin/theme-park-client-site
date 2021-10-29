import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut} from "firebase/auth";

// initialize 
initializeAuthentication() ;
// UseFirebase 
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [isLoading,setIsLoading] = useState(true);

    const googleProvider =new GoogleAuthProvider()
    const auth = getAuth()
    //    SignIn Using Google
    const  signInUsingGoogle = ()=>{
        setIsLoading(true)
    return signInWithPopup(auth,googleProvider)
    //  .then(result=>{
    //      console.log(result.user)
    //      setUser(result.user)
    //  })
     .catch(err=>{
         setError(err.message)
     })
     .finally(()=> setIsLoading(false))
    }
    

    // observer user state changed
    useEffect(()=>{

        const unsubsCribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user) 
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })

        return ()=>unsubsCribed ;

    },[])

    // SignOut 
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth) 
        .then(()=>{
        setUser({})
        })
        .finally(()=>setIsLoading(false))

    }
    // Return
    return{
        signInUsingGoogle ,
        user,
        error,
        logOut ,
        isLoading 
    }
}
export default useFirebase ;