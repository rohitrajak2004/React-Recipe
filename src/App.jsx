import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import SingleRecipe from "./Pages/SingleRecipe";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#F9F9F9] text-black">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
