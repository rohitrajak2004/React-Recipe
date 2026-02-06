import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeData';
import { Star, Clock, Users, ChefHat, Pizza, Salad, IceCream, Coffee, UtensilsCrossed } from 'lucide-react';

const Home = () => {
  const { data } = useContext(RecipeContext);

  // Get featured recipe (first one) for hero section
  const featuredRecipe = data[0];

  // Get recipes by category for sections
  const dessertRecipes = data.filter(recipe => recipe.category === 'Dessert').slice(0, 3);
  const otherRecipes = data.filter(recipe => recipe.category === 'Other').slice(0, 3);
  const indianRecipes = data.filter(recipe => recipe.category === 'Indian').slice(0, 3);

  // Categories for bottom section
  const categories = [
    { name: 'Italian', icon: Pizza, color: '#ff642f' },
    { name: 'Indian', icon: UtensilsCrossed, color: '#ff642f' },
    { name: 'Dessert', icon: IceCream, color: '#ff642f' },
    { name: 'Healthy', icon: Salad, color: '#ff642f' },
    { name: 'Other', icon: ChefHat, color: '#ff642f' },
  ];

  // Star rating component
  const StarRating = ({ rating = 5 }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#ff642f' : 'none'}
          color="#ff642f"
        />
      ))}
    </div>
  );

  // Recipe Card Component
  const RecipeCard = ({ recipe, size = 'normal' }) => (
    <Link
      to={`/recipes/${recipe.id}`}
      className={`group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
        size === 'large' ? 'h-full' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            size === 'large' ? 'h-64 md:h-80 lg:h-96' : 'h-48 md:h-56'
          }`}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
          {recipe.category}
        </div>
      </div>
      <div className="p-4">
        <StarRating />
        <h3 className={`font-bold text-gray-800 mt-2 ${
          size === 'large' ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {recipe.recipeName}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {recipe.recipeTitle}
        </p>
        <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{recipe.prepTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Featured Recipe */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[400px]">
                <img
                  src={featuredRecipe.recipeImage}
                  alt={featuredRecipe.recipeName}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <ChefHat size={16} />
                  <span>Chef's Special</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
                  {featuredRecipe.recipeName}
                </h1>
                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                  {featuredRecipe.recipeTitle}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <Clock size={18} color="#ff642f" />
                    <span className="text-sm font-medium">{featuredRecipe.prepTime} Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full">
                    <Users size={18} color="#ff642f" />
                    <span className="text-sm font-medium">{featuredRecipe.servings} People</span>
                  </div>
                </div>
                <Link
                  to={`/recipes/${featuredRecipe.id}`}
                  className="bg-[#ff642f] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e55829] transition-colors w-fit"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Super Delicious Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair">
              Super Delicious
            </h2>
            <Link
              to="/recipes"
              className="text-[#ff642f] font-medium hover:underline text-sm md:text-base"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherRecipes.length > 0 ? (
              otherRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              // Fallback to first 3 recipes if no "Other" category
              data.slice(1, 4).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Sweet Tooth Section */}
      {dessertRecipes.length > 0 && (
        <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair">
                Sweet Tooth
              </h2>
              <Link
                to="/recipes"
                className="text-[#ff642f] font-medium hover:underline text-sm md:text-base"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dessertRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Indian Dishes */}
      {indianRecipes.length > 0 && (
        <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-playfair">
                Popular Indian Dishes
              </h2>
              <Link
                to="/recipes"
                className="text-[#ff642f] font-medium hover:underline text-sm md:text-base"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {indianRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Categories Section */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 font-playfair">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to="/recipes"
                  className="group flex flex-col items-center"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 border-4 border-transparent group-hover:border-orange-100">
                    <Icon size={36} color={category.color} strokeWidth={1.5} />
                  </div>
                  <span className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-[#ff642f] transition-colors">
                    {category.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair">
            Have a Recipe to Share?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our community of food lovers and share your favorite recipes with the world.
          </p>
          <Link
            to="/create-recipe"
            className="inline-block bg-[#ff642f] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#e55829] transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Submit Your Recipe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;