import { useLocation, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import { useContext } from "react";
import { RecipeContext } from "./context/RecipeData";

const App = () => {
  const { currentUser } = useContext(RecipeContext);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/sign-up";
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Protect admin page - redirect non-admins to home
  if (isAdminRoute && (!currentUser || !currentUser.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen w-full bg-[#FFFF] text-black">
      {isAuthPage ? (
        location.pathname === "/login" ? (
          <Login />
        ) : (
          <SignUp />
        )
      ) : isAdminRoute ? (
        <Mainroutes />
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
