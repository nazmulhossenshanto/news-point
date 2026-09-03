import { Suspense } from "react"
import Categories from "./Categories"

 
const LeftAside = () => {
  return (
    <div>
        <Suspense fallback="Loading all categories...">
            <Categories></Categories>
        </Suspense>
    </div>
  )
}

export default LeftAside