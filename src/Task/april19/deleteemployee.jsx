import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


export default function DeleteEmployee() {

    let params = useParams()
    let navigate = useNavigate()

    function deleteClick() {
        axios.delete(`http://127.0.0.1:4050/delete-employee/${params.id}`)
            .then(response => {
                alert("Deleted...")
            })
        navigate("/")
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-gray-400 p-6">
                <h3>Do You Want To Delete</h3>
                <div className="mt-4 text-center">
                    <button onClick={deleteClick} className="bg-red-700 cursor-pointer px-3 py-1 rounded text-white">Yes</button>
                    <Link to='/' className="bg-yellow-500 px-3 py-1 rounded text-white ms-2">No</Link>
                </div>
            </div>
        </div>
    )
}