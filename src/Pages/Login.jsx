 
import { Link } from "react-router" 

 
const Login = () => { 
  return (
    <div className="flex items-center justify-center">
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-xl font-semibold text-center mt-5">Login to your account  </h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="font-semibold text-center text-gray-600 mt-5">Don't have an accoutn ? <Link to='/auth/register' className="text-red-400">Register</Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  )
}

export default Login