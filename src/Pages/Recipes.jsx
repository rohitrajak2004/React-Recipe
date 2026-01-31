import { useContext } from "react";
import { RecipeContext } from "../context/RecipeData";
import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { data } = useContext(RecipeContext);
  const recipeData = data.map((recipe) => (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`} className="block h-full">
        <div className="h-full w-full flex flex-col gap-2 bg-[#f1f1f1] rounded-xl hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <img
            className="w-full h-64 md:h-52 lg:h-56 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110 "
            src={recipe.recipeImage}
            alt={recipe.recipeName}
          />
          <div className="px-4 pt-2 flex flex-col justify-between flex-1 pb-4">
            <div className="flex flex-col gap-3">
              <h2 className="bg-[#fff4c3] w-fit px-2 py-1 font-medium text-[#C46111] rounded-full text-sm">
                {recipe.category}
              </h2>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-[#232629]">
                {recipe.recipeName}
              </h1>
              <p className="text-base md:text-sm text-[#303235]">
                {recipe.recipeTitle}
              </p>
            </div>
            <div className="flex pt-4 justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock size={20} color="#ff642f" />
                <span className="text-sm md:text-xs font-medium text-[#303235]">
                  {recipe.prepTime} Minute
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} color="#ff642f" />
                <span className="text-sm md:text-xs font-medium text-[#303235]">
                  {recipe.servings} People
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-8 flex flex-wrap gap-0">
      {recipeData}
    </div>
  );
};

export default Recipes;
