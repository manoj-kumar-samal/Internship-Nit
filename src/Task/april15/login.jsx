import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Login(){
  return(
    <div>
      <div className="flex justify-center items-center" style={{height:'500px'}}>
        <div className=" w-55 p-3 border rounded shadow-2xl">
          <h3 className="text-2xl mb-3">Login</h3>
          <dl>
            <dt className="mb-2">User Name</dt>
            <dd>
              <input className="border outline-blue-700" type="text"></input>
            </dd>
            <dt className="mt-3">Password</dt>
            <dd className="mt-2">
              <input className="border outline-blue-700" type="password"></input>
            </dd>
          </dl>
          <button className="bg-pink-600 text-white px-2 py-1 mt-4 rounded-sm">Login</button>
          <div className="mt-2">
            New here?<Link to='/register' className="underline text-sky-600"> Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}