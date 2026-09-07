import { use } from "react"
import { AuthContext } from "../Context/AuthContext"
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import { Navigate, useLocation } from "react-router";

 
const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    if(loading){
      return <LoadingPage></LoadingPage>
    }
    if(!user){
      return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
  return children;
}

export default PrivateRoute