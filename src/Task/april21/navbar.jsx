import { ChevronDown } from "lucide-react"

export default function Navbar() {
    return (
        <div>
            <div className="bg-white max-w-screen-2xl container mx-auto md:px-20 px-4 shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Jobs</a></li>
                                <li><a>Companies</a></li>
                                {/* <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li> */}
                                <li><a>Services</a></li>
                            </ul>
                        </div>
                        <div className="w-100 md:hidden">
                            <label className="input w-75 rounded-3xl">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search jobs here..." />
                            </label>
                        </div>
                        <a className=" text-xl"><img className="hidden md:block" src="title.PNG" width="140px"></img></a>
                        <div className="navbar-center hidden lg:flex ms-6">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Jobs</a></li>
                                <li><a>Companies</a></li>
                                <li><a>Services</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden md:navbar-end">
                        <button className="btn btn-outline btn-primary rounded-2xl me-3">Login</button>
                        <button className="btn btn-secondary bg-amber-700 text-white rounded-2xl me-3">Register</button>
                        <span className="hidden md:block">|</span>
                        <div className="hidden md:block dropdown dropdown-hover ms-3">
                            <div className="flex items-center cursor-pointer">
                                <div tabIndex={0} className="m-1 text-sm ">For employers</div>
                                <ChevronDown className="h-4 w-4 mt-0.5"></ChevronDown>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Buy online</a></li>
                                <li><a>Naukri Talent Cloud</a></li>
                                <li><a>Employee Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}