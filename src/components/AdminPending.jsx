import { useContext } from "react";
import { RecipeContext } from "../context/RecipeData";
import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
const AdminPending = () => {
  const { pendingRecipes } = useContext(RecipeContext);
  console.log(pendingRecipes);

  const pendingRecipeList = pendingRecipes.map((recipes) => (
    <div
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 md:px-0"
      key={recipes.id}
    >
      <Link to={`/admin/recipes/${recipes.id}`} className="block h-full">
        <div className="h-full w-full flex flex-col gap-2 bg-[#f1f1f1] rounded-xl hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <img
            className="w-full h-64 md:h-52 lg:h-56 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110 "
            src={recipes.recipeImage}
            // alt={recipes.recipeName}
          />
          <div className="px-4 pt-2 flex flex-col justify-between flex-1 pb-4">
            <div className="flex flex-col gap-3">
              <h2 className="bg-[#fff4c3] w-fit px-2 py-1 font-medium text-[#C46111] rounded-full text-sm">
                {recipes.category}
              </h2>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-[#232629]">
                {recipes.recipeName}
              </h1>
              <p className="text-base md:text-sm text-[#303235]">
                {recipes.recipeTitle}
              </p>
            </div>
            <div className="flex pt-4 justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock size={20} color="#ff642f" />
                <span className="text-sm md:text-xs font-medium text-[#303235]">
                  {recipes.prepTime} Minutes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} color="#ff642f" />
                <span className="text-sm md:text-xs font-medium text-[#303235]">
                  {recipes.servings} People
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));
  //   const allPendingRecipes = pendingRecipes.map((recipes) => (
  //     <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={recipes.id}>
  {
    /* <Link to={`/recipes/${recipe.id}`} className="block h-full"> */
  }

  {
    /* </Link> */
  }
  //     </div>
  //   ));

  //  const handleSubmit = ()=>{
  //     setData([...data,...pendingRecipes])
  //  }
  return (
    <div className="bg-[#f7f6f6] mt-4 h-full w-full">
      <h1 className="px-6 sm:px-8 md:px-12 lg:px-20 text-3xl font-medium">
        Pending Recipes
      </h1>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-8 flex flex-wrap gap-5 w-full h-full">
        {pendingRecipeList}
      </div>
    </div>
  );
};

export default AdminPending;

{
  /* <button 
            onClick={handleSubmit}
            className="bg-black mt-4 text-white w-fit px-3 py-1 text-md active:scale-105 md:bg-white lg:bg-nonemd:border-black md:border md:transition-transform md:text-black font-normal duration-200 md:hover:scale-105 rounded-sm md:cursor-pointer md:hover:bg-black md:hover:text-white">Approve</button> */
}
