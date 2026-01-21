import { NavLink } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <nav className="p-5 bg-[#F9F9F9] shadow-md w-screen overflow-x-hidden md:shadow-none lg:shadow-none md:px-15 lg:px-20">
      <div className="flex items-center justify-between">
        <h1 className="font-pacifico italic font-extrabold text-3xl tracking-tighter w-fit">
          Tastebite
        </h1>
        <div className="hidden md:flex md:gap-13 lg:flex lg:gap-14 ">
          <NavLink
            onClick={() => setisOpen(true)}
            to="/"
            className="font-inter md:font-medium lg:font-medium text-lg font-medium hover:text-[#ff642f]"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setisOpen(true)}
            to="/recipes"
            className="font-inter text-lg font-medium hover:text-[#ff642f] md:font-medium lg:font-medium"
          >
            Recipes
          </NavLink>
          <NavLink
            onClick={() => setisOpen(true)}
            to="/create-recipe"
            className="font-inter text-lg font-medium hover:text-[#ff642f] md:font-medium lg:font-medium"
          >
            Add Recipe
          </NavLink>
          <NavLink
            onClick={() => setisOpen(true)}
            to="/about"
            className="font-inter text-lg font-medium hover:text-[#ff642f] md:font-medium lg:font-medium"
          >
            About
          </NavLink>
          
        </div>
        <button
          className="md:hidden lg:hidden"
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
        className={`md:hidden lg:hidden overflow-hidden origin-top transform transition-all duration-300 ease-in-out ${isOpen ? "scale-y-0 max-h-0 opacity-0" : " pt-5 flex flex-col gap-5 opacity-100 max-h-52 scale-y-100"}`}
      >
        <hr className={`${isOpen ? "hidden" : "block"}`} />
        <NavLink
          onClick={() => setisOpen(true)}
          to="/"
          className="font-inter text-lg font-medium hover:text-[#ff642f]"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/recipes"
          className="font-inter text-lg font-medium hover:text-[#ff642f]"
        >
          Recipes
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/create-recipe"
          className="font-inter text-lg font-medium hover:text-[#ff642f]"
        >
          Add Recipe
        </NavLink>
        <NavLink
          onClick={() => setisOpen(true)}
          to="/about"
          className="font-inter text-lg font-medium hover:text-[#ff642f]"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
