import React, { useContext, useEffect } from 'react'
import { RecipeContext } from '../context/RecipeData';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
    const { currentUser, setCurrentUser } = useContext(RecipeContext);
    const navigate = useNavigate();

    useEffect(() => {
      // Redirect to home if not admin
      if (!currentUser || !currentUser.isAdmin) {
        navigate("/");
      }
    }, [currentUser, navigate]);

    const logoutHandler = ()=>{
        setCurrentUser(null);
        navigate("/");
    }
  return (
    <nav className="p-5 bg-[#F9F9F9] shadow-md w-full overflow-x-hidden box-border  md:px-15 lg:px-20 sticky top-0 z-50">
        <div className="flex items-center justify-between">
    <h1 className="font-cursive font-semibold tracking-wide text-3xl md:text-4xl w-fit">
          Tastebite
        </h1>
        <button 
        onClick={logoutHandler}
        className="bg-black text-white w-fit px-3 py-1 text-md active:scale-105 md:bg-white lg:bg-nonemd:border-black md:border md:transition-transform md:text-black font-normal duration-200 md:hover:scale-105 rounded-sm md:cursor-pointer md:hover:bg-black md:hover:text-white">
          Logout
        </button>
        </div>
    </nav>
  )
}

export default AdminNavbar