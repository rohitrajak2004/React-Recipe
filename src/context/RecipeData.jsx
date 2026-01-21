import { createContext, useState } from "react"

export const recipedata = createContext(null);

const RecipeData = (props) => {
    const [data, setdata] = useState([])
  return (
    <recipedata.Provider value={{ data, setdata }}>
        {props.children}
    </recipedata.Provider>
  )
}

export default RecipeData