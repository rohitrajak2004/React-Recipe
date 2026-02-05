import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeData';

const AdminSingleRecipe = () => {
   const { pendingRecipes, setPendingRecipes,setData } = useContext(RecipeContext);
  const { id } = useParams();
  const recipe = pendingRecipes.find((recipe) => String(recipe.id) === String(id));
  const navigate = useNavigate();

  // Guard against undefined recipe
  if (!recipe) {
    return (
      <div className="flex flex-col justify-center items-center p-10 h-screen bg-[#F9F9F9]">
        <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/admin')}
          className="bg-[#ff642f] text-white px-6 py-3 rounded-md hover:bg-[#e55829] transition-colors"
        >
          Back to Admin Dashboard
        </button>
      </div>
    );
  }

  const ingredients = recipe.ingredients.split(",");
  const instructions = recipe.instructions.split(",");

const RejectHandler = () => {
  setPendingRecipes(prevData =>
    prevData.filter(item => String(item.id) !== String(id))
  );
  navigate('/admin');
};
const AcceptHandler = () => {
    setData (prevData => [...prevData, recipe]);
  setPendingRecipes(prevData =>
    prevData.filter(item => String(item.id) !== String(id))
  );
  
  navigate('/admin');
};


  return (
    <div className="p-6 bg-[#F9F9F9] sm:px-8 md:px-12 lg:px-20 cursor-default">
      <h1 className="text-4xl font-extrabold font-playfair leading-11 md:text-5xl md:pt-5 lg:text-6xl lg:pt-5">
        {recipe.recipeName}
      </h1>

      <h3 className="mt-4 mb-4 text-md md:text-lg md:mt-7 lg:text-xl lg:mt-7">
        {recipe.recipeTitle}
      </h3>
      <img
        className="mt-4 mb-4 rounded-xl object-cover h-64 sm:h-80 md:h-128 lg:h-148 lg:rounded-2xl w-full"
        src={recipe.recipeImage}
      />
      <div className="flex justify-start gap-9 md:gap-14 lg:gap-16 items-center ">
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#2b2828ce]">PREP TIME</h4>
          <h4 className="font-semibold">{recipe.prepTime} MIN</h4>
        </div>
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#2b2828ce]">SERVINGS</h4>
          <h4 className="font-semibold">{recipe.servings} PEOPLE</h4>
        </div>
        <div className="flex flex-col justify-center ">
          <h4 className="text-[#2b2828ce]">Chef</h4>
          <h4 className="font-semibold">{recipe.chefName}</h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mt-7 md:flex-4">
          <h1 className=" mb-5 text-4xl font-playfair font-extrabold">
            Ingredients
          </h1>

          <ol className="text-xl list-disc px-6 marker:text-[#473328] space-y-4 text-[#1d1b1b]">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="mt-7 md:flex-7">
          <h1 className=" mb-5 text-4xl font-playfair font-extrabold">
            Instructions
          </h1>
          <ol className="text-xl mb-9 list-decimal px-6 marker:font-pacifico marker:text-[#000000] marker:font-medium space-y-5 text-[#1d1b1b]">
            {instructions.map((item, idx) => (
              <li key={idx}> {item}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap'>
        <button
        className="border-black border transition-transform text-black font-normal duration-200 hover:scale-105 rounded-sm px-4 py-1 cursor-pointer hover:bg-black hover:text-white mt-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button
        className="border-black border transition-transform text-black font-normal duration-200 hover:scale-105 rounded-sm px-4 py-1 cursor-pointer hover:bg-black hover:text-white mt-5"
        onClick={() => navigate(`/admin/recipes/${id}/update`)}
      >
        Update
      </button>
      <button
        className="border-black border transition-transform text-black font-normal duration-200 hover:scale-105 rounded-sm px-4 py-1 cursor-pointer hover:bg-black hover:text-white mt-5"
        onClick={AcceptHandler}
      >
        Accept
      </button>
      <button
        className="border-black border transition-transform text-black font-normal duration-200 hover:scale-105 rounded-sm px-4 py-1 cursor-pointer hover:bg-black hover:text-white mt-5"
        onClick={RejectHandler}
      >
        Reject
      </button>
      </div>
    </div>
  );
}

export default AdminSingleRecipe