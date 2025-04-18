import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function EditEmployee() {
    const[employee,setEmployee]=useState({id:"",name:"",Designation:""})
    let params=useParams()
    let navigate=useNavigate()

    axios.get(`http://127.0.0.1:4050/employee/${params.id}`)
    .then(response=>{
        setEmployee(response.data)
    })

    const formik=useFormik({
        initialValues:{
            id: employee.id,
            name: employee.name,
            Designation: employee.Designation
        },
        onSubmit:(value)=>{
            axios.put(`http://127.0.0.1:4050/edit-employee/${params.id}`,value)
            .then(response=>{
                alert("Employee Edited...")
            })
            navigate("/")
        },
        enableReinitialize:true
    })
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border p-4 rounded-2xl">
                <h3 className="text-2xl mb-4">Edit Employee</h3>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt className="mb-1 font-semibold">Id</dt>
                        <dd>
                            <input value={formik.values.id} onChange={formik.handleChange} name="id" className="border" type="text"></input>
                        </dd>
                        <dt className="mt-2 font-semibold">Name</dt>
                        <dd className="mt-1">
                            <input value={formik.values.name} onChange={formik.handleChange} name="name" className="border" type="text" placeholder="Enter Name"></input>
                        </dd>
                        <dt className="mt-2 font-semibold">Designation</dt>
                        <dd className="mt-1">
                            <input value={formik.values.Designation} onChange={formik.handleChange} name="Designation" className="border" type="text" placeholder="Enter Designation"></input>
                        </dd>
                    </dl>
                    <div className=" mt-5">
                        <button type="submit" className="bg-green-700 px-3 py-2 text-white rounded cursor-pointer">Save</button>
                        <Link to="/" className="bg-yellow-500 px-3 py-2 text-white rounded ms-2">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}