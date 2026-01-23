import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import RecipeData from "./context/RecipeData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeData>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RecipeData>,
);
