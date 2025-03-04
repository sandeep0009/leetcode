import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../Helper/axios";
import { userSignUpSchema } from "@repo/types-common/types";

const SignUp: React.FC = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const[fullName,setFullName]=useState('');
  const navigate=useNavigate();
  const handleSignUp=async()=>{
    try {
      const parsedData=await userSignUpSchema.safeParse({email,password});
      if(!parsedData.success){
        console.log(parsedData.error);
        return;
      }

      const res=await axiosInstance.post('/signin',{
        email,
        password,
        fullName
      });
      if(res.status===200){
        localStorage.setItem('token',res.data.token);
        navigate('/problems');

      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-gray-500">Sign up to get started</p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
