import { useLoaderData, useParams } from "react-router"
import Header from "../../Components/Header/Header"
import RightAside from "../../Components/HomeLayout/RightAside"
import NewsDetailsCard from "../../Components/NewsDetailsCard"

 
const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams(); 
    const news = data.find(item=> item.id === id); 
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
            <section className="col-span-9">
                <h1 className="font-bold text-xl mb-5">News Details</h1>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside>
        </main>
    </div>
  )
}

export default NewsDetails