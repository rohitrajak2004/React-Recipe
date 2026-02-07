import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext(null);

const RecipeData = (props) => {
  // Initialize data from localStorage or use default
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('recipeData');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error('Failed to parse recipeData from localStorage:', error);
      }
    }
    return [
  // 🍰 DESSERTS
  {
    id: 1,
    recipeName: "Chocolate Brownie",
    recipeTitle: "Classic Fudgy Chocolate Brownie",
    category: "Dessert",
    prepTime: 40,
    servings: 6,
    chefName: "Rohit",
    recipeImage: "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
    ingredients: "dark chocolate, butter, sugar, eggs, flour, cocoa powder",
    instructions: "melt chocolate and butter, mix sugar and eggs, add flour and cocoa, bake until set, cool and slice"
  },
  {
    id: 2,
    recipeName: "Gulab Jamun",
    recipeTitle: "Traditional Indian Gulab Jamun",
    category: "Dessert",
    prepTime: 30,
    servings: 4,
    chefName: "Rohit",
    recipeImage: "https://media.istockphoto.com/id/2177992427/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=IREPeN0lqAhR-lPo5bF8lSnXK8ymaiCDfdivdc2BjJQ=",
    ingredients: "khoya, flour, sugar, water, cardamom, oil",
    instructions: "prepare dough, fry balls, make sugar syrup, soak jamuns and serve"
  },
  {
    id: 3,
    recipeName: "Apple Pie",
    recipeTitle: "Homemade Classic Apple Pie",
    category: "Dessert",
    prepTime: 50,
    servings: 6,
    chefName: "Rohit",
    recipeImage: "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
    ingredients: "apples, sugar, cinnamon, flour, butter",
    instructions: "prepare crust, cook apple filling, assemble pie, bake until golden"
  },

  // 🍝 ITALIAN
  {
    id: 4,
    recipeName: "Margherita Pizza",
    recipeTitle: "Classic Italian Margherita Pizza",
    category: "Italian",
    prepTime: 45,
    servings: 4,
    chefName: "Rohit",
    recipeImage: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    ingredients: "pizza dough, tomato sauce, mozzarella, basil",
    instructions: "roll dough, spread sauce, add cheese, bake, garnish with basil"
  },
  {
    id: 5,
    recipeName: "Spaghetti Carbonara",
    recipeTitle: "Creamy Italian Carbonara",
    category: "Italian",
    prepTime: 25,
    servings: 2,
    chefName: "Rohit",
    recipeImage: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    ingredients: "spaghetti, eggs, parmesan, garlic, olive oil",
    instructions: "boil pasta, prepare egg mixture, toss pasta with sauce and serve"
  },
  {
    id: 6,
    recipeName: "Lasagna",
    recipeTitle: "Vegetarian Italian Lasagna",
    category: "Italian",
    prepTime: 55,
    servings: 5,
    chefName: "Rohit",
    recipeImage: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    ingredients: "lasagna sheets, tomato sauce, vegetables, cheese",
    instructions: "layer pasta sheets with sauce and cheese, bake until bubbly"
  },

  // 🇮🇳 INDIAN
  {
    id: 7,
    recipeName: "Paneer Butter Masala",
    recipeTitle: "Restaurant Style Paneer Butter Masala",
    category: "Indian",
    prepTime: 35,
    servings: 4,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwYnV0dGVyJTIwbWFzYWxhfGVufDB8fDB8fHww",
    ingredients: "paneer, tomato puree, butter, cream, spices",
    instructions: "cook tomato gravy, add paneer and cream, simmer and serve"
  },
  {
    id: 8,
    recipeName: "Vegetable Biryani",
    recipeTitle: "Aromatic Veg Biryani",
    category: "Indian",
    prepTime: 50,
    servings: 5,
    chefName: "Rohit",
    recipeImage: "https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=7ovRTJwxa_x4Q_BHoiLhiTKdTneDQ5W_m4_jJyOHbBM=",
    ingredients: "basmati rice, vegetables, yogurt, spices",
    instructions: "cook rice and vegetables separately, layer, dum cook and serve"
  },
  {
    id: 9,
    recipeName: "Masala Dosa",
    recipeTitle: "South Indian Masala Dosa",
    category: "Indian",
    prepTime: 30,
    servings: 3,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFzYWxhJTIwRG9zYXxlbnwwfHwwfHx8MA%3D%3D",
    ingredients: "dosa batter, potato filling, oil",
    instructions: "spread batter, cook till crisp, add filling and serve"
  },

  // 🥗 HEALTHY
  {
    id: 10,
    recipeName: "Greek Salad",
    recipeTitle: "Fresh Greek Salad",
    category: "Healthy",
    prepTime: 10,
    servings: 2,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZWslMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    ingredients: "cucumber, tomato, olives, feta cheese, olive oil",
    instructions: "chop vegetables, mix with cheese, drizzle olive oil and serve"
  },
  {
    id: 11,
    recipeName: "Oatmeal Bowl",
    recipeTitle: "Healthy Breakfast Oatmeal",
    category: "Healthy",
    prepTime: 8,
    servings: 1,
    chefName: "Rohit",
    recipeImage: "https://plus.unsplash.com/premium_photo-1691010744402-b8587568e4eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2F0bWVhbCUyMEJvd2x8ZW58MHx8MHx8fDA%3D",
    ingredients: "oats, milk, banana, honey",
    instructions: "cook oats with milk, top with banana and honey"
  },
  {
    id: 12,
    recipeName: "Grilled Chicken Salad",
    recipeTitle: "Protein Rich Chicken Salad",
    category: "Healthy",
    prepTime: 25,
    servings: 2,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JpbGxlZCUyMENoaWNrZW4lMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    ingredients: "chicken breast, lettuce, olive oil, lemon",
    instructions: "grill chicken, slice, mix with greens and dressing"
  },

  // 🍽️ OTHERS
  {
    id: 13,
    recipeName: "Veg Burger",
    recipeTitle: "Crispy Veg Burger",
    category: "Others",
    prepTime: 30,
    servings: 2,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmVnJTIwQnVyZ2VyfGVufDB8fDB8fHww",
    ingredients: "burger bun, potato patty, lettuce, sauce",
    instructions: "cook patty, assemble burger and serve"
  },
  {
    id: 14,
    recipeName: "Hakka Noodles",
    recipeTitle: "Chinese Style Veg Hakka Noodles",
    category: "Others",
    prepTime: 20,
    servings: 3,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGFra2ElMjBOb29kbGVzfGVufDB8fDB8fHww",
    ingredients: "noodles, vegetables, soy sauce, oil",
    instructions: "boil noodles, stir fry vegetables, mix and serve"
  },
  {
    id: 15,
    recipeName: "Tomato Soup",
    recipeTitle: "Classic Tomato Soup",
    category: "Others",
    prepTime: 15,
    servings: 2,
    chefName: "Rohit",
    recipeImage: "https://images.unsplash.com/photo-1629978444632-9f63ba0eff47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9tYXRvJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
    ingredients: "tomato, garlic, cream, spices",
    instructions: "cook tomatoes, blend, simmer and serve hot"
  }
];
});
  
  // Initialize users from localStorage or use default
  const [user, setUser] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      try {
        return JSON.parse(savedUsers);
      } catch (error) {
        console.error('Failed to parse users from localStorage:', error);
      }
    }
    return [
    {
      fullName: "Rohit",
      email: "rohit@me.com",
      password: "123",
      isAdmin: true,
    },
  ]});
  
  // Initialize pendingRecipes from localStorage
  const [pendingRecipes, setPendingRecipes] = useState(() => {
    const savedPending = localStorage.getItem('pendingRecipes');
    if (savedPending) {
      try {
        return JSON.parse(savedPending);
      } catch (error) {
        console.error('Failed to parse pendingRecipes from localStorage:', error);
      }
    }
    return [];
  });
  
  // Initialize currentUser from localStorage (keeps user logged in after refresh)
  const [currentUser, setCurrentUser] = useState(() => {
    const savedCurrentUser = localStorage.getItem('currentUser');
    if (savedCurrentUser) {
      try {
        return JSON.parse(savedCurrentUser);
      } catch (error) {
        console.error('Failed to parse currentUser from localStorage:', error);
      }
    }
    return null;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('recipeData', JSON.stringify(data));
  }, [data]);

  // Save to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));
  }, [user]);

  // Save to localStorage whenever pendingRecipes change
  useEffect(() => {
    localStorage.setItem('pendingRecipes', JSON.stringify(pendingRecipes));
  }, [pendingRecipes]);

  // Save to localStorage whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser'); // Remove when user logs out
    }
  }, [currentUser]);

  return (
    <RecipeContext.Provider
      value={{ data, setData, user, setUser, pendingRecipes, setPendingRecipes, currentUser, setCurrentUser }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeData;
