 
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

 
const CategoryNews = () => {
  const {id} = useParams();
  const categoryId = Number(id);
  const data = useLoaderData(); 
  
  // const [categoryNews, setCategoryNews] = useState([])
  //   useEffect(()=>{
  //       if(categoryId == 0){
  //         setCategoryNews(data)
  //         return
  //       }
  //       else if (categoryId == 1){
  //         const filteredNews = data.filter(news => news.others.is_today_pick == true);
  //         setCategoryNews(filteredNews)
  //         return
  //       }
  //       else{
  //         const filteredNews = data.filter(news => news.category_id === categoryId);
  //        setCategoryNews(filteredNews)
  //         return
  //       }
  //   }, [data, categoryId, setCategoryNews]);

  // eslint-disable-next-line no-useless-assignment
  let categoryNews  = [];
  if(categoryId === 0){
    categoryNews = data;
  }else if(categoryId === 1){
    categoryNews = data.filter(news => news.others.is_today_pick === true);
  }
  else{
    categoryNews = data.filter(news => news.category_id === categoryId)
  }


  return ( 
    <div>
      <div>
        <h2 className="text-xl font-bold mb-5"> Total <span className="text-red-600">{ categoryNews.length}</span> news Found</h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {
          categoryNews.map(news=>(<NewsCard news={news} key={news.id}></NewsCard>))
        }
      </div>
    </div>
  )
};

export default CategoryNews;