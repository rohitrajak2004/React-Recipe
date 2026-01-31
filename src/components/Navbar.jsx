import { NavLink, useNavigate } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
import { useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeData";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(true);
  const { currentUser, setCurrentUser } = useContext(RecipeContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setCurrentUser(null);
    setisOpen(true);
    navigate("/");
  };
  return (
    <nav className="p-5 bg-[#F9F9F9] shadow-md w-full overflow-x-hidden box-border  md:px-15 lg:px-20 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="font-cursive font-semibold tracking-wide text-3xl md:text-4xl w-fit">
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
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="font-inter text-lg font-medium hover:text-[#ff642f] md:font-medium lg:font-medium"
            >
              Logout
            </button>
          ) : (
            <NavLink
              onClick={() => setisOpen(true)}
              to="/login"
              className="font-inter text-lg font-medium hover:text-[#ff642f] md:font-medium lg:font-medium"
            >
              Login
            </NavLink>
          )}
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
        className={`md:hidden lg:hidden overflow-hidden origin-top transform transition-all duration-300 ease-in-out ${isOpen ? "scale-y-0 max-h-0 opacity-0" : " pt-5 flex flex-col gap-5 opacity-100 max-h-auto scale-y-100 "}`}
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
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="font-inter text-lg font-medium hover:text-[#ff642f] text-left"
          >
            Logout
          </button>
        ) : (
          <NavLink
            onClick={() => setisOpen(true)}
            to="/login"
            className="font-inter text-lg font-medium hover:text-[#ff642f]"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
