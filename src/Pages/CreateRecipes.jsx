import { nanoid } from "nanoid";
import  { useContext} from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from './../context/RecipeData';

const CreateRecipes = () => {
  const {data, setData} = useContext(RecipeContext)

  const { register, handleSubmit, reset} = useForm();
   const submitHandler =(recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe])
    reset();
  };
 


  return (
    <div className="flex flex-col justify-center items-center p-10 bg-[#F9F9F9] md:w-full md:overflow-x-hidden lg:w-full lg:overflow-x-hidden">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl text-center font-bold ">Submit Your Recipe</h1>
        <h3 className="text-2xl font-normal text-center text-[#34393e]">
          Share your delicious recipe with our community
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="pt-10 px-5 flex flex-col gap-5 justify-center w-full max-w-3xl md:w-3/6"
      >
        <h1 className="text-3xl font-semibold text-center">
          Basic Information
        </h1>

        <h3 className="text-xl font-medium">Recipe Name</h3>
        <input
          {...register("recipeName")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="text"
          placeholder="Pizza , Pasta"
        />

        <h3 className="text-xl font-medium">Category</h3>
        <select
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
          {...register("prepTime")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="number"
          placeholder="Time In Minutes"
        />

        <h3 className="text-xl font-medium">Servings</h3>
        <input
          {...register("servings")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="number"
          placeholder="4"
        />

        <h3 className="text-xl font-medium">Description</h3>
        <textarea
          {...register("description")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          placeholder="Brief description of your recipe"
        ></textarea>

        <h3 className="text-xl font-medium">Your Name</h3>
        <input
          {...register("chefName")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="text"
          placeholder="Rohit"
        />

        <h1 className="text-xl font-medium">Recipe Image</h1>
        <input
          {...register("recipeImage")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="url"
          placeholder="PNG, JPG up to 10MB"
        />

        <h1 className="text-xl font-medium">Ingredients</h1>
        <input
          {...register("ingredients")}
          className="border border-gray-400 rounded text-xl px-2 py-1"
          type="text"
          placeholder="Write Ingredients Seperated by ,"
        />

        <h1 className="text-xl font-medium">Instructions</h1>
        <input
          {...register("instructions")}
          className="border border-gray-400 rounded text-xl p-2"
          type="text"
          placeholder="Write Instructions Seperated by ,"
        />

        <button className="bg-[#ff642f] text-white px-3 py-2 active:scale-95 w-fit rounded-md">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
