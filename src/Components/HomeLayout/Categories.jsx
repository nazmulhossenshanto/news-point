import { use } from "react";
import { NavLink } from "react-router";

 
 const categoryPromise = fetch('./categories.json').then(res=> res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories);
  return (
    <div className="flex flex-col gap-3">
        All Categories
        {
          categories.map(category=>(<NavLink className={`btn btn-wide`} key={category.id}>{category.name}</NavLink>))
        }
        </div>
  )
}

export default Categories