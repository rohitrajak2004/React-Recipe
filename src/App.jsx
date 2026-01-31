import { useLocation } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <div className="h-screen w-full bg-[#FFFF] text-black">
      {isAuthPage ? (
        location.pathname === "/login" ? (
          <Login />
        ) : (
          <SignUp />
        )
      ) : (
        <>
          <Navbar />
          <Mainroutes />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
