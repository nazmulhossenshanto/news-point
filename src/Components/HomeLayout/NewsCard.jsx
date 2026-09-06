 import { useState } from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa6";
 import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({news}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const publishedTime = new Date(news.author.published_date).toLocaleTimeString("en-GB", {
        day: "2-digit", month: "2-digit", year: "numeric",
        hour: "2-digit", minute: "2-digit", hour12: true, });
  return (
    <div className=" shadow-lg space-y-4"> 
    {/* header div */}
    <div className="flex justify-between items-center bg-gray-200 rounded-lg p-2">
        <div className="flex justify-center items-center gap-2">
            <div>
                <img className="rounded-full h-20" src={news.author.img} alt="" />
            </div>
            <div>
                <h1 className="text-lg font-semibold">{news.author.name}</h1>
                <p className="text-gray-500">{publishedTime}</p>
                {/* <p>{new Date(news.author.published_date)}</p> */}
            </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
            <button className="rounded-full  p-2"><FaRegBookmark size={20} /></button>
            <button className="rounded-full  p-2"><IoShareSocialOutline size={24}/></button>
        </div>
    </div>
    <h1 className="text-xl font-bold">{news.title}</h1>
    <img src={news.image_url} alt=" " className="h-100 object-cover w-full"   />
    <div className="px-4"> <p className="text-gray-500"> {isExpanded ? news.details : `${news.details.slice(0, 150)}...`} </p> <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-600 font-semibold mt-2 hover:underline" > {isExpanded ? "Read Less" : "Read More"} </button> </div>
    <div className="flex justify-between items-center mb-2 p-4">
        <div className="flex gap-2 items-center">
            <p className="text-yellow-400 font-semibold flex items-center justify-center gap-1"><FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> </p>
            <p className="text-gray-500 font-semibold">{news.rating.number}</p>
        </div>
        <div className="flex gap-2 items-center">
            <p className="text-gray-500 font-semibold"><FaEye></FaEye> </p>
            <p>{news.total_view}</p>
        </div>
    </div>
    </div>
  )
}

export default NewsCard