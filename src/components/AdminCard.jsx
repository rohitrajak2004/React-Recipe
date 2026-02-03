import { BookOpenCheck, Hourglass, ListChecks } from "lucide-react";
import { useContext } from "react"
import { RecipeContext } from "../context/RecipeData"

const AdminCard = () => {
    const {pendingRecipes,data} = useContext(RecipeContext)
  return (
    <div className="p-6 md:px-14 lg:px-20 bg-[#f7f6f6]">
      <h1 className="text-4xl font-semibold font-inter mb-2 md:text-5xl">Admin Dashboard</h1>
      <h3 className="text-md mb-5 md:text-xl">Manage recipe submissions and published recipes</h3>

      <div className="flex flex-col gap-4 mt-4 md:flex-row md:justify-between lg:gap-9">
        <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 md:flex-3 md:py-3">
          <Hourglass color="#ff642f" />
          <span className="text-end"> 
            <h1 className="text-2xl font-semibold lg:text-3xl">{pendingRecipes.length}</h1>
            <h5>Pending Approval</h5>
          </span>
        </div>
        <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 md:flex-3 md:py-3">
          <BookOpenCheck color="#ff642f" />
          <span className="text-end">
            <h1 className="text-2xl font-semibold lg:text-3xl">{data.length}</h1>
            <h5>Published Recipes</h5>
          </span>
        </div>
        <div className="flex justify-between items-center bg-white rounded-xl px-4 py-2 md:flex-3 md:py-3">
          <ListChecks color="#ff642f" />
          <span className="text-end">
            <h1 className="text-2xl font-semibold lg:text-3xl">{pendingRecipes.length + data.length}</h1>
            <h5>Total Recipes</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
