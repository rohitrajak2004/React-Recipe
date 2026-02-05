import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import CreateRecipes from "../Pages/CreateRecipes";
import SingleRecipe from "../Pages/SingleRecipe";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Admin from "../Pages/Admin";
import AdminSingleRecipe from "../components/AdminSingleRecipe";
import AdminUpdateRecipe from "../components/AdminUpdateRecipe";


const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<SingleRecipe />} />
      <Route path="/about" element={<About />} />
      <Route path="/create-recipe" element={<CreateRecipes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/admin" element={<Admin />}/>
      <Route path="/admin/recipes/:id" element={<AdminSingleRecipe />} />
      <Route path="/admin/recipes/:id/update" element={<AdminUpdateRecipe />} />
    </Routes>
  );
};

export default Mainroutes;
