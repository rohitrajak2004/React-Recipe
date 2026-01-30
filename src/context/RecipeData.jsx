import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeData = (props) => {
  const [data, setData] = useState([
    {
      category: "Italian",
      chefName: "Rohit",
      id: "jCFLwCJ4TX1TTockfjeAv",
      ingredients: "400g spaghetti 200g pancetta or guanciale, diced 4 large eggs 100g Pecorino Romano cheese, grated Black pepper to taste Salt for pasta water",
      instructions: "Bring a large pot of salted water to boil and cook spaghetti according to package directions.,While pasta cooks, fry pancetta in a large skillet until crispy.,In a bowl, whisk together eggs, cheese, and black pepper.,Drain pasta, reserving 1 cup of pasta water.,Add hot pasta to the skillet with pancetta, remove from heat,Quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce,Serve immediately with extra cheese and black pepper.",
      prepTime: "45",
      recipeImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
      recipeName: "Classic Spaghetti Carbonara",
      recipeTitle: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
      servings: "3",
    },
  ]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeData;
