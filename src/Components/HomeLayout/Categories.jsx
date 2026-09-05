import { use } from "react";
import { NavLink } from "react-router";

 const categoryPromise = fetch('./categories.json').then(res=> res.json());
const Categories = () => {
    const categories = use(categoryPromise); 
  return (
    <div className="flex flex-col gap-3">
        All Categories
        {
          categories.map(category=>(<NavLink
             className={`btn  bg-base-100 border-0 font-bold hover:bg-base-300 `}
              to={`/category/${category.id}`}
              key={category.id}>{category.name}</NavLink>))
        }
        </div>
  )
}

export default Categories;