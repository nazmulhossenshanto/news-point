import { NavLink } from "react-router";

 
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 space-y-10">
        <h1 className="text-4xl text-red-500 ">Page Not Found..!!!</h1>
        <NavLink to='/'>Go Back </NavLink>
        </div>
  )
}

export default ErrorPage; 