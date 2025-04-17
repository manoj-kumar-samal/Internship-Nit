import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const db = getFirestore(app);

function Dashboard() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = auth.currentUser;

            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                } else {
                    console.log("No user data found");
                }
            } else {

                navigate("/login");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = async () => {
        await auth.signOut();
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Your Dashboard 🎉</h1>
                {userData ? (
                    <div>
                        <p className="text-lg text-gray-700 mb-2">👤 Username: <strong>{userData.username}</strong></p>
                        <p className="text-lg text-gray-700 mb-6">📧 Email: <strong>{userData.email}</strong></p>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-600">Loading user info...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
