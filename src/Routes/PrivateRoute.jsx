import { use } from "react"
import { AuthContext } from "../Context/AuthContext"
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import { Navigate } from "react-router";

 
const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    if(loading){
      return <LoadingPage></LoadingPage>
    }
    if(!user){
      return <Navigate to='/auth/login'></Navigate>
    }
  return children;
}

export default PrivateRoute