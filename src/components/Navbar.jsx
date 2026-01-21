import { NavLink } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="p-5 bg-[#F9F9F9] shadow-md w-screen overflow-x-hidden">
      <div className="flex items-center justify-between">
        <h1 className="font-pacifico italic font-extrabold text-3xl tracking-tighter">
          Tastebite
        </h1>
        <button
          onClick={() => {
            isOpen ? setisOpen(false) : setisOpen(true);
          }}
        >
          {isOpen ? (
            <TextAlignJustify size={20} color="#000000" strokeWidth={1.25} />
          ) : (
            <X />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden origin-top transform transition-all duration-300 ease-in-out ${isOpen ? "scale-y-0 max-h-0 opacity-0" : " pt-5 flex flex-col gap-5 opacity-100 max-h-52 scale-y-100"}`}
      >
        <hr className={`${isOpen ? "hidden" : "block"}`} />
        <NavLink
          onClick={() => setisOpen(true)}
          to="/"
          className="font-inter text-lg font-medium hover:text-gray-600"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/recipes"
          className="font-inter text-lg font-medium hover:text-gray-600"
        >
          Recipes
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/about"
          className="font-inter text-lg font-medium hover:text-gray-600"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/create-recipe"
          className="font-inter text-lg font-medium hover:text-gray-600"
        >
          Create Recipe
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
