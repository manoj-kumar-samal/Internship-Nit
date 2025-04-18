import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function AddEmployee() {
    let navigate=useNavigate()

    const formik=useFormik({
        initialValues:{
            id:"",
            name:"",
            Designation:""
        },
        onSubmit:(values)=>{
            axios.post("http://127.0.0.1:4050/add-employee",values)
            alert("Details Added...")
            navigate("/")
        }
    })

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border p-4 rounded-2xl">
                <h3 className="text-2xl mb-4">Add Employee</h3>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt className="mb-1 font-semibold">Id</dt>
                        <dd>
                            <input name="id" onChange={formik.handleChange} className="border" type="text"></input>
                        </dd>
                        <dt className="mt-2 font-semibold">Name</dt>
                        <dd className="mt-1">
                            <input name="name" onChange={formik.handleChange} className="border" type="text" placeholder="Enter Name"></input>
                        </dd>
                        <dt className="mt-2 font-semibold">Designation</dt>
                        <dd className="mt-1">
                            <input name="Designation" onChange={formik.handleChange} className="border" type="text" placeholder="Enter Designation"></input>
                        </dd>
                    </dl>
                    <div className=" mt-5">
                    <button type="submit" className="bg-green-700 px-3 py-2 text-white rounded cursor-pointer">Add</button>
                    <Link to="/" className="bg-yellow-500 px-3 py-2 text-white rounded ms-2">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}