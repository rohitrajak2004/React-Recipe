import { Star } from 'lucide-react';

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

export default StarRating;
