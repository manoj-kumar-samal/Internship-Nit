import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AddEmployee from "./addemployee";
import EditEmployee from "./edit-employee";
import DeleteEmployee from "./deleteemployee";

export default function Task4(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/add-employee" element={<AddEmployee/>}></Route>
                <Route path="/edit-employee/:id" element={<EditEmployee/>}></Route>
                <Route path="/delete-employee/:id" element={<DeleteEmployee/>}></Route>
            </Routes>
        </>
    )
}