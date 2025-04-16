import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate('/');
        }
    }, [navigate]);

    function signoutClick() {
        localStorage.removeItem("username"); 
        navigate('/');
    }

    return (
        <>
            <div className="flex justify-between bg-gray-400 p-3">
                <span className="text-2xl">{localStorage.getItem("username")}</span>
                <h3 className="text-3xl">Dashboard</h3>
                <button onClick={signoutClick} className="bg-pink-600 rounded px-2 py-1 text-white cursor-pointer">
                    Signout
                </button>
            </div>

            <div className="p-4">
                <h4>{localStorage.getItem("username")}</h4>
                <p>Role: User</p>
            </div>

            <div className="flex justify-around p-4">
                <div>
                    <h5>Total Tasks</h5>
                    <p>45</p>
                </div>
                <div>
                    <h5>Completed Tasks</h5>
                    <p>30</p>
                </div>
                <div>
                    <h5>Pending Tasks</h5>
                    <p>15</p>
                </div>
            </div>

            <div className="p-4">
                <h4>Recent Activities</h4>
                <ul>
                    <li>Completed Task: "Design Dashboard"</li>
                    <li>Started Task: "Develop User Profile"</li>
                </ul>
            </div>

            <div className="p-4">
                <h4>Upcoming Tasks</h4>
                <ul>
                    <li>Task 1: Complete User Dashboard - Due: 2025-04-20</li>
                    <li>Task 2: Test Login Functionality - Due: 2025-04-22</li>
                </ul>
            </div>
        </>
    );
}
