import { CATEGORIES } from "../util/CATEGORIES"
import { useState } from "react"

const Search = () => {

    const [selectedCategory, setSelectedCategory] = useState("None")

    const handleCategoryClick = (category:string) => {
        selectedCategory == category ? setSelectedCategory("None") : setSelectedCategory(category)
    }

  return (
    <div className="search-section">
    <input type="text" placeholder="Search by title" />
    <div className="category">
        <p>Search by category</p>
        {
            CATEGORIES.map((category) => (
                <>
                    <button
                        onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
                </>
            ))
        }
    </div>
    {selectedCategory}
  </div>
  )
}

export default Search