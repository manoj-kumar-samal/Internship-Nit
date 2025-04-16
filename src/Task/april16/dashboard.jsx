import { useNavigate } from "react-router-dom"


export default function Dashboard(){

    let navigate=useNavigate();



    function signoutClick(){
        navigate('/');
        localStorage.removeItem("username")
    }

    return(
        <>
            <div>
                <div className="flex justify-between bg-gray-400 p-3">
                    <span className="text-2xl">{localStorage.getItem("username")}</span>
                    <h3 className="text-3xl">Dashboard</h3>
                    <button onClick={signoutClick} className="bg-pink-600 rounded px-2 py-1 text-white cursor-pointer">Signout</button>
                </div>
            </div>
        </>
    )
}