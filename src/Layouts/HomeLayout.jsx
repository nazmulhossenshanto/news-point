import { Outlet } from "react-router"
import Header from "../Components/Header/Header"
import LeftAside from "../Components/HomeLayout/LeftAside"
import LatestNews from "../Components/LatestNews/LatestNews"
import Navbar from "../shared/Navbar/Navbar"
import RightAside from "../Components/HomeLayout/RightAside"

 
const HomeLayout = () => {
  return (
    <div>
       <header>
         {/* Header */}
        <Header></Header>

       <section className="w-11/12 mx-auto">
         {/* Latest News component */}
        <LatestNews></LatestNews>
       </section>
       {/* Navbar */}
       <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
       </nav>
       </header> 
     <main className="w-11/12 mx-auto">
           {/* This section will divided in three part */}
      <div className="grid grid-cols-12">
           {/* This section will divided in three part */}
        {/* <h1>This is from home page</h1> */}
        {/* left aside */}
       <div className="col-span-3">
         <LeftAside></LeftAside>
       </div>

        {/* OutLet */}
       <div className="col-span-6">
         <Outlet></Outlet>
       </div>

        {/* Right aside */}
       <div className="col-span-3">
         <RightAside></RightAside>
       </div>
    </div>
     </main>
    </div>
  )
}

export default HomeLayout