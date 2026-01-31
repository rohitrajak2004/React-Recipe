import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RecipeContext } from "../context/RecipeData";
import { X } from "lucide-react";

const SignUp = () => {
  const { setUser, currentUser } = useContext(RecipeContext);
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const submitHandler = (data) => {
    setUser((prevUsers) => [...prevUsers, data]);
    reset();
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col p-5 bg-[#f9f9f9] relative h-auto gap-5 w-80 md:w-96 md:h-96 rounded"
      >
        <X onClick={() => navigate("/")} className="absolute right-2 top-2" />
        <h1 className="text-center text-3xl font-playfair font-semibold">
          SIGN UP
        </h1>
        <input
          required
          {...register("fullName")}
          className="border-b text-lg border-gray-400 placeholder:text-gray-400 p-2 focus:outline-none"
          type="text"
          placeholder="👤 Full Name"
        />
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
          Sign up
        </button>
        <Link
          to="/login"
          className="text-center text-sm text-[#ff642f] hover:underline mt-2"
        >
          Already have an account? Log in
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
