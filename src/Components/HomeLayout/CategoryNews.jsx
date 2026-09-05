
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

 
const CategoryNews = () => {
    const {id} = useParams();
    const categoryId = Number(id);
    const data = useLoaderData();
    // console.log(data);
    useEffect(()=>{
        const filteredNews = data.filter(news => news.category_id === categoryId);
        console.log(filteredNews);
    }, [data, categoryId])
  return ( 
    <div>CategoryNews</div>
  )
};

export default CategoryNews;