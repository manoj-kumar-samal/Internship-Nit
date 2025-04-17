import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";


export default function Task3(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </>
    )
}