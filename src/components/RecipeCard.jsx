import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';
import StarRating from './StarRating';

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

export default RecipeCard;
