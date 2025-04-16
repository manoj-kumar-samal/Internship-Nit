import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Register(){
  return(
    <div>
      <div className="flex justify-center items-center" style={{height:'500px'}}>
        <div className=" w-55 p-3 border rounded shadow-2xl">
          <h3 className="text-2xl mb-3">Register</h3>
          <dl>
            <dt className="mb-2">User Name</dt>
            <dd>
              <input className="border outline-cyan-700" type="text"></input>
            </dd>
            <dt className="mt-3">Password</dt>
            <dd className="mt-2">
              <input className="border outline-cyan-700" type="password"></input>
            </dd>
            <dt className="mt-3">Email</dt>
            <dd className="mt-2">
              <input className="border outline-cyan-700" type="email"></input>
            </dd>
          </dl>
          <button className="bg-pink-600 text-white px-2 py-1 mt-4 rounded-sm">Register</button>
          <div className="mt-2">
            Have an account?<Link to='/login' className="text-sky-500 underline"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}