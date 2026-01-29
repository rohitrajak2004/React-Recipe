import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Recipes from '../Pages/Recipes'
import About from '../Pages/About'
import CreateRecipes from '../Pages/CreateRecipes'
import SingleRecipe from '../Pages/SingleRecipe'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/recipes/:id' element={<SingleRecipe/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create-recipe' element={<CreateRecipes/>}/>
    </Routes>
  )
}

export default Mainroutes