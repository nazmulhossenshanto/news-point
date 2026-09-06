import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center">
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-xl font-semibold text-center mt-5">Register your account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* Photo Url */}
          <label className="label">Photo</label>
          <input type="text" className="input" placeholder="Photo URL" />
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" /> 
            <button 
            className="p-3 absolute right-3"
            type="button"
            onClick={()=> setShowPassword(!showPassword)}
            >
              {
                showPassword ?  <FaEye size={18}></FaEye> : <FaRegEyeSlash size={18} />
              }
            </button>
          </div>
          
          <button className="btn btn-neutral mt-4">Login</button>
          <p className="font-semibold text-center text-gray-600 mt-5">Already have an accoutn ? <Link to='/auth/login' className="text-red-400">Login</Link></p>
        </fieldset>
      </div>
    </div>
    </div>
  )
}

export default Register