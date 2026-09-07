import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, loading, signOutUser } = use(AuthContext);
  // console.log(user);
  if (loading) {
    return <p>Loading...</p>;
  }
  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("User logged out successfully");
    } catch (error) {
      console.log("sign Out error : ", error);
    }
  };
  return (
    <div className="flex justify-between items-center my-5">
      {/* this div is empty */}
      <div>
        {user && <h1 className="text-xl font-bold">{user.displayName}</h1>}
      </div>
      <div className="nav flex items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={user?.photoURL || userImg}
          alt={user?.displayName || "User"}
          title={user?.displayName || "User"}
          onError={(e)=>{
            e.currentTarget.src = userImg
          }}
        />
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-accent btn-outline"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login">
            <button className="btn bg-gray-700 text-white px-8">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
