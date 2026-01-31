import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeData";
import { X } from "lucide-react";

const Login = () => {
  const { user, currentUser, setCurrentUser } = useContext(RecipeContext);
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  useEffect(() => {
    if (currentUser) {
      if (currentUser.isAdmin === true) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [currentUser, navigate]);
  const submitHandler = (data) => {
    const foundUser = user.find(
      (user) => user.email === data.email && user.password === data.password,
    );
    const foundAdmin = user.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password &&
        user.isAdmin === true,
    );
    if (foundUser) {
      if (foundAdmin) {
        console.log("admin logged in");
        navigate("/admin");
        setCurrentUser(foundAdmin);
      } else if (!foundAdmin) {
        navigate("/");
        console.log("not admin");
        setCurrentUser(foundUser);
      }
    } else {
      alert("Invalid email or password");
    }

    reset();
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-5 relative bg-[#f9f9f9] h-auto gap-5 w-80 md:w-96 md:h-96 rounded"
      >
        <X onClick={() => navigate("/")} className="absolute right-2 top-2" />
        <h1 className="mb-5 text-center text-3xl font-playfair font-semibold">
          LOGIN
        </h1>

        <input
          required
          {...register("email")}
          className="border-b text-lg border-gray-400 placeholder:text-gray-400 p-2 focus:outline-none"
          type="email"
          placeholder="📧 Email"
        />
        <input
          required
          {...register("password")}
          className="border-b text-lg border-gray-400 placeholder:text-gray-400 p-2 focus:outline-none"
          type="password"
          placeholder="🔒 Password"
        />
        <button className="bg-black mt-4 text-white w-fit px-3 py-1 text-md active:scale-105 md:bg-white lg:bg-nonemd:border-black md:border md:transition-transform md:text-black font-normal duration-200 md:hover:scale-105 rounded-sm md:cursor-pointer md:hover:bg-black md:hover:text-white">
          Login
        </button>
        <Link
          to="/sign-up"
          className="text-center text-sm text-[#ff642f] hover:underline mt-2"
        >
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
};

export default Login;
