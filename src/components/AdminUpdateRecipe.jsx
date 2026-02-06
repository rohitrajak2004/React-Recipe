import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { RecipeContext } from '../context/RecipeData';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminUpdateRecipe = () => {
  const { pendingRecipes, setPendingRecipes } = useContext(RecipeContext);
  const navigate = useNavigate();
    
    const params = useParams();
    const { id } = params;
    const recipe = pendingRecipes.find((recipe) => String(recipe.id) === String(id));
    const { register, handleSubmit } = useForm({
        defaultValues: {
            recipeName : recipe.recipeName,
            recipeTitle : recipe.recipeTitle,
            category : recipe.category,
            prepTime: recipe.prepTime, 
            servings: recipe.servings,
            chefName: recipe.chefName,
            recipeImage: recipe.recipeImage,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
        }
    });
    
    const updateHandler = (updatedData) => {
      // Find and replace the existing recipe with updated data
      setPendingRecipes(prevRecipes =>
        prevRecipes.map(item => 
          String(item.id) === String(id) 
            ? { ...item, ...updatedData, status: "pending" } // Keep the same ID, update other fields
            : item // Keep other recipes unchanged
        )
      );
      toast.success("Recipe updated successfully!", {
            position: "top-right",
            autoClose: 2000,
          });
      navigate(-1); // Navigate back to admin after saving
    };
    return (
      <div className="flex flex-col justify-center items-center p-10 bg-[#FFFFFF] md:w-full md:overflow-x-hidden lg:w-full lg:overflow-x-hidden">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-5xl text-center font-bold ">Update Recipe</h1>
          <h3 className="text-2xl font-normal text-center text-[#34393e]">
            Modify the details of the recipe below
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(updateHandler)}
          className="pt-10 px-5 flex flex-col gap-5 justify-center w-full max-w-3xl md:w-3/6"
        >
          <h1 className="text-3xl font-semibold text-center">
            Basic Information
          </h1>
  
          <h3 className="text-xl font-medium">Recipe Name</h3>
          <input
            required
            {...register("recipeName")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="text"
            placeholder="Pizza , Pasta"
          />
  
          <h3 className="text-xl font-medium">Recipe Title</h3>
          <input
            required
            {...register("recipeTitle")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="text"
            placeholder="Write Title about the Recipe"
          />
  
          <h3 className="text-xl font-medium">Category</h3>
          <select
            required
            {...register("category")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            placeholder="Select Category"
          >
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Healthy">Healthy</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
  
          <h3 className="text-xl font-medium">Prep Time</h3>
          <input
            required
            {...register("prepTime")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="number"
            placeholder="Time In Minutes"
          />
  
          <h3 className="text-xl font-medium">Servings</h3>
          <input
            required
            {...register("servings")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="number"
            placeholder="4"
          />
  
          <h3 className="text-xl font-medium">Your Name</h3>
          <input
            required
            {...register("chefName")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="text"
            placeholder="Rohit"
          />
  
          <h1 className="text-xl font-medium">Recipe Image</h1>
          <input
            required
            {...register("recipeImage")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="url"
            placeholder="PNG, JPG up to 10MB"
          />
  
          <h1 className="text-xl font-medium">Ingredients</h1>
          <input
            required
            {...register("ingredients")}
            className="border border-gray-400 rounded text-xl px-2 py-1"
            type="text"
            placeholder="Write Ingredients Seperated by ,"
          />
  
          <h1 className="text-xl font-medium">Instructions</h1>
          <input
            required
            {...register("instructions")}
            className="border border-gray-400 rounded text-xl p-2"
            type="text"
            placeholder="Write Instructions Seperated by ,"
          />
  
          <button className="bg-[#ff642f] text-white px-3 py-2 active:scale-95 w-fit rounded-md">
            Save Changes
          </button>
           <button
        className="border-black border transition-transform text-black font-normal duration-200 hover:scale-105 rounded-sm px-4 py-1 cursor-pointer hover:bg-black hover:text-white mt-5 w-fit"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
        </form>
      </div>
    );
}

export default AdminUpdateRecipe