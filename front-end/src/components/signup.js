import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Import the Firebase auth instance
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
            Navigate('/')  // redirect to home page
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex items-center relative justify-center w-full h-screen mt-12 overflow-x-hidden ">
            <div className="w-full max-w-sm mx-auto relative z-10 px-4 md:px-0 ">
                <img alt="Your Company" src={logo} className="mx-auto h-20 w-auto" />
                <form onSubmit={handleSignUp} method="POST">
                    <label className="flex items-center mb-2 text-gray-600 text-sm block w-full rounded-md font-medium">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full h-12 px-5 py-3 text-base font-normal shadow-sm text-gray-900 bg-transparent border-gray-300 rounded placeholder-gray-400 outline-black"
                        placeholder="Enter full name.."
                        required
                    />
                    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your email.."
                        required
                    />
                    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full h-12 px-5 py-3 text-base leading-8 font-normal shadow-sm text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none"
                        placeholder="Enter your password.."
                        required
                    />
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-5 text-base bg-black text-white rounded cursor-pointer font-semibold text-center shadow-xs transition-all h-12 hover:bg-gray-700 mb-10"
                        >
                            Register
                        </button>
                        <p className="text-center">
                            <a href="/login" className="font-normal text-base leading-7 text-orange-400 text-right w-full hover:text-black">
                                Already have an account?
                            </a>
                        </p>
                    </div>
                    <div className="border border-gray-400 w-full mt-8"></div>
                    <span className="text-sm mt-5 text-gray-400 text-center block">
                        ©<a href="">Empie Dance Kenya</a> 2024, All rights reserved.
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
