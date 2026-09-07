import { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const {createUser} = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(password.length < 6){
      return setError('Password must be at least 6 characters!')
    };
    setSubmitting(true);
    setError('')
    try {
      const result = await createUser(email, password);
      alert(`${result.user.email} registered successfully`)
    } catch (error) {
      setError(error.message)
    }finally{
      setSubmitting(false)
    }
  }
  return (
    <div className="flex items-center justify-center">
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-xl font-semibold text-center mt-5">Register your account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          {/* Photo Url */}
          <label className="label">Photo</label>
          <input type="text" className="input" placeholder="Photo URL" />
          {/* Email */}
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required/>
          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input name="password" type={showPassword ? "text" : "password"} className="input" placeholder="Password" required/> 
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

          {error && <p className="text-red-500">{error}</p>}
          
          <button type="submit" disabled={isSubmitting} className="btn btn-neutral mt-4">{isSubmitting ? 'Registering...' : 'Register'}</button>
          <p className="font-semibold text-center text-gray-600 mt-5">Already have an accoutn ? <Link to='/auth/login' className="text-red-400">Login</Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default Register