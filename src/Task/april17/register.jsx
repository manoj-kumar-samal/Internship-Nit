
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../../firebase/firebase.config";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth=getAuth(app)
    const db=getFirestore(app)

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Registering:", { username, email, password });

        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCredential.user;

        setDoc(doc(db,"users",user.uid),{
            username,
            email
        });

        console.log("User registered and saved to Firestore:", user);
      alert("Registration successful!");


    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account 🚀</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300 focus:outline-none"
                            placeholder="Your username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300 focus:outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300 focus:outline-none"
                            placeholder="Create a strong password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
