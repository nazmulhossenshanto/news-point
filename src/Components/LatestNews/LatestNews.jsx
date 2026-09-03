import MarqueeModule from "react-fast-marquee"; 

 const Marquee = MarqueeModule.default;

const LatestNews = () => {
  return (
    <div className="bg-gray-100 font-light py-6 px-4 flex items-center gap-5"> <span className="btn btn-primary bg-red-600 border-none text-lg">Latest</span> <Marquee  pauseOnHover speed={60} className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam sequi cupiditate ut dolor enim natus doloremque nihil voluptas minus? Consequatur asperiores quidem accusamus, voluptatibus unde sint eaque nobis rerum perspiciatis mollitia quos facilis eveniet reiciendis repudiandae assumenda laudantium! Hic consequuntur dolores enim aut temporibus delectus ducimus cupiditate iste nihil.</Marquee></div>
  )
}

export default LatestNews;