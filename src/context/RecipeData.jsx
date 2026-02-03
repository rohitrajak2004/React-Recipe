import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeData = (props) => {
  const [data, setData] = useState([
    {
      category: "Italian",
      chefName: "Rohit",
      id: "jCFLwCJ4TX1TTockfjeAv",
      ingredients:
        "400g spaghetti 200g pancetta or guanciale, diced 4 large eggs 100g Pecorino Romano cheese, grated Black pepper to taste Salt for pasta water",
      instructions:
        "Bring a large pot of salted water to boil and cook spaghetti according to package directions.,While pasta cooks, fry pancetta in a large skillet until crispy.,In a bowl, whisk together eggs, cheese, and black pepper.,Drain pasta, reserving 1 cup of pasta water.,Add hot pasta to the skillet with pancetta, remove from heat,Quickly stir in egg mixture, adding pasta water as needed to create a creamy sauce,Serve immediately with extra cheese and black pepper.",
      prepTime: "45",
      recipeImage:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
      recipeName: "Classic Spaghetti Carbonara",
      recipeTitle:
        "A traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
      servings: "3",
    },
    {
      id: "jCFLwca4TX1TTockfjeAv",
      recipeName: "Pizza",
      recipeTitle: "Cheesy Veg Loaded Homemade Pizza",
      category: "Italian",
      prepTime: 45,
      servings: 4,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
      ingredients:
        "pizza base, pizza sauce, mozzarella cheese, capsicum, onion, tomato, olives, oregano, chili flakes",
      instructions:
        "preheat oven to 220C, spread sauce on base, add chopped veggies, add cheese on top, sprinkle oregano and chili flakes, bake for 15 minutes, slice and serve hot",
    },
    {
      id: "jCFLwca4TX1TfTockfjeAv",
      recipeName: "Pasta",
      recipeTitle: "Creamy White Sauce Alfredo Pasta",
      category: "Italian",
      prepTime: 25,
      servings: 2,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
      ingredients:
        "pasta, butter, garlic, maida, milk, black pepper, salt, oregano, cheese",
      instructions:
        "boil pasta till soft, melt butter in pan, saute garlic, add maida and cook, pour milk slowly and stir, add salt and pepper, mix boiled pasta, add cheese and oregano, cook for 2 minutes and serve",
    },
    {
      id: "jCFLwCJ4TX1TTockfjeaaw",
      recipeName: "Paneer Butter Masala",
      recipeTitle: "Rich and Creamy Restaurant Style Paneer",
      category: "Indian",
      prepTime: 35,
      servings: 4,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww",
      ingredients:
        "paneer, tomato puree, butter, cream, onion, ginger garlic paste, garam masala, red chili powder, salt",
      instructions:
        "heat butter in pan, cook onion till soft, add ginger garlic paste, add tomato puree and spices, cook till oil separates, add paneer cubes, pour cream and simmer, garnish and serve",
    },
    {
      id: "jCFLwfnawX1TTockfjeAv",
      recipeName: "Veg Biryani",
      recipeTitle: "Aromatic One Pot Vegetable Biryani",
      category: "Indian",
      prepTime: 50,
      servings: 5,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients:
        "basmati rice, carrot, beans, peas, onion, yogurt, biryani masala, saffron milk, ghee, whole spices",
      instructions:
        "soak rice for 20 minutes, fry whole spices in ghee, add sliced onions, add vegetables and masala, mix yogurt, add soaked rice and water, cook till rice is done, drizzle saffron milk and serve",
    },
    {
      id: "jCFLwCJ4ThasTTockfjeAv",
      recipeName: "Burger",
      recipeTitle: "Crispy Aloo Tikki Veg Burger",
      category: "Other",
      prepTime: 30,
      servings: 2,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fHww",
      ingredients:
        "burger buns, boiled potato, bread crumbs, onion, tomato, lettuce, mayonnaise, ketchup, cheese slice",
      instructions:
        "mash potatoes with spices, shape into patties, coat with crumbs and fry, toast buns lightly, spread mayo and ketchup, place patty and veggies, add cheese and close bun, serve warm",
    },
    {
      id: "jCFLwCJ4TX1TanjckfjeAv",
      recipeName: "Fried Rice",
      recipeTitle: "Quick Chinese Style Veg Fried Rice",
      category: "Other",
      prepTime: 20,
      servings: 3,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww",
      ingredients:
        "cooked rice, carrot, beans, spring onion, garlic, soy sauce, pepper, oil, salt",
      instructions:
        "heat oil in wok, saute garlic, add chopped veggies, stir fry on high flame, add cooked rice, pour soy sauce and pepper, mix well and cook 2 minutes, garnish spring onion and serve",
    },
    {
      id: "jCFLwCJafaj1TTockfjeAv",
      recipeName: "Dosa",
      recipeTitle: "Crispy South Indian Plain Dosa",
      category: "Indian",
      prepTime: 15,
      servings: 3,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      ingredients: "dosa batter, oil, salt",
      instructions:
        "heat nonstick tawa, pour ladle of batter, spread in circular motion, drizzle few drops oil, cook till golden and crisp, fold dosa and serve with chutney",
    },
    {
      id: "jCFLwCajfX1TTockfjeAv",
      recipeName: "Chocolate Cake",
      recipeTitle: "Soft and Moist Eggless Chocolate Cake",
      category: "Dessert",
      prepTime: 40,
      servings: 6,
      chefName: "Rohit",
      recipeImage:
        "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ingredients:
        "maida, cocoa powder, sugar, baking soda, milk, oil, vanilla essence, vinegar",
      instructions:
        "mix dry ingredients in bowl, add milk and oil, add vanilla and vinegar, mix into smooth batter, pour into greased tin, bake at 180C for 30 minutes, cool and slice to serve",
    },
  ]);
  const [user, setUser] = useState([
    {
      fullName: "rohit",
      email: "rohit@me.com",
      password: "123",
      isAdmin: true,
    },
  ]);
  const [pendingRecipes, setPendingRecipes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <RecipeContext.Provider
      value={{ data, setData, user, setUser, pendingRecipes, setPendingRecipes, currentUser, setCurrentUser }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeData;
