 
import { use, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router" 
import { AuthContext } from "../Context/AuthContext"

 
const Login = () => { 
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const {signInWithEmail} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    if(password.length < 6){
      return setError('Password must at least 6 character')
    }

    setSubmitting(true);
    try {
      const result = await signInWithEmail(email, password);
      console.log(result.user);
      navigate(`${location.state ? location.state : '/'}`)
    } catch (error) {
      console.log('login error ', error);
      setError(error.message)
      
    }finally {
    setSubmitting(false); 
  }

  };

  return (
    <div className="flex items-center justify-center">
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-xl font-semibold text-center mt-5">Login to your account  </h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="space-y-2">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>

          {error && <p className="text-red-500 ">{error}</p>}
          
          <button disabled={isSubmitting} className="btn btn-neutral w-full mt-4">{isSubmitting ? 'Login in...' : 'Login'}</button>
          <p className="font-semibold text-center text-gray-600 mt-5">Don't have an accoutn ? <Link to='/auth/register' className="text-red-400">Register</Link></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login