import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#F9F9F9] text-black">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
