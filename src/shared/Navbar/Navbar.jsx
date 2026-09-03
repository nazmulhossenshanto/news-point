import { NavLink } from "react-router";
import userImg from '../../assets/user.png'
 
const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
        <div></div>
        <div className="nav flex items-center gap-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex justify-center items-center gap-3"> 
            <img src={userImg} alt="" />
            <button className="btn bg-gray-400 px-8">Login</button>
        </div>
    </div>
  )
}

export default Navbar;