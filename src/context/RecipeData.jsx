import { createContext, useState } from "react"

export const RecipeContext = createContext(null);

const RecipeData = (props) => {
    const [data, setData] = useState([])
  return (
    <RecipeContext.Provider value={{ data, setData }}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeData