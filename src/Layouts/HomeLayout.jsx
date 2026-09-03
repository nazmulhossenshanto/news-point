import Header from "../Components/Header/Header"
import LeftAside from "../Components/HomeLayout/LeftAside"
import LatestNews from "../Components/LatestNews/LatestNews"
import Navbar from "../shared/Navbar/Navbar"

 
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
        
        {/* left aside */}
        <LeftAside></LeftAside>

        {/* OutLet */}

        {/* Right aside */}
     </main>
    </div>
  )
}

export default HomeLayout