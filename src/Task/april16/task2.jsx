import { Route, Routes } from "react-router-dom";
import Login2 from "./login";
import Dashboard from "./dashboard";


export default function Task2() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login2/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </>
    )
}