 import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="space-y-3">
        <h1 className="text-xl font-bold ">Login With</h1>
        <div className="flex flex-col space-y-3">
            <button className="btn btn-outline btn-secondary"><FcGoogle size={24} /> Google</button>
        <button className="btn btn-outline btn-accent"><FaGithub size={24} /> Github</button>
        </div>
    </div>
  )
}

export default SocialLogin