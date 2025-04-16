import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login2() {

    const [details, setDetails] = useState({ userName: "", password: "" });

    var Details = [
        {
            userName: "Manoj",
            password: "manoj@123"
        },
        {
            userName: "Rahul",
            password: "rahul@123"
        },
        {
            userName: "Stubbs",
            password: "stubbs@123"
        }
    ]

    let navigate = useNavigate()

    function userNameChange(e) {
        setDetails(
            {
                userName: e.target.value,
                password: details.password
            }
        )
    }
    function passwordChange(e) {
        setDetails(
            {
                userName: details.userName,
                password: e.target.value
            }
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function submitClick(e) {

        var userDetails;
        Details.map(items=>{
            if(items.userName===details.userName){
                userDetails=items;
            }
        })


        if (userDetails) {
            if (userDetails.password === details.password) {
                alert("Login Successfully")
                console.log(details);
                localStorage.setItem("username", details.userName)
                navigate('/dashboard')
            } else {
                alert("Wrong Password")
            }
        } else {
            alert("user not exists")
        }
    }

    return (
        <>
            <div className="flex justify-center items-center" style={{ height: '500px' }}>
                <div className=" w-55 p-3 border rounded shadow-2xl">
                    <h3 className="text-2xl mb-3">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <dl>
                            <dt className="mb-2">User Name</dt>
                            <dd>
                                <input value={details.userName} onChange={userNameChange} className="border outline-blue-700" type="text"></input>
                            </dd>
                            <dt className="mt-3">Password</dt>
                            <dd className="mt-2">
                                <input value={details.password} onChange={passwordChange} className="border outline-blue-700" type="password"></input>
                            </dd>
                        </dl>
                        <button onClick={submitClick} type="submit" className="w-full bg-pink-600 text-white px-2 py-1 mt-4 rounded-sm">Login</button>
                    </form>
                    {/* <div className="mt-2">
                        New here?<Link to='/register' className="underline text-sky-600"> Register</Link>
                    </div> */}
                </div>
            </div>
        </>
    )
}