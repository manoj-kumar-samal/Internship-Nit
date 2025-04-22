import SearchBar from "./searchbar";


export default function Main() {
    return (
        <div className="mt-20 md:flex justify-center items-center text-center md:mt-10 h-screen">
            <div>
                <div className="flex justify-center items-center">
                    <img src="title.PNG" className="md:hidden mb-4"></img>
                </div>
                <div className="text-2xl md:text-4xl font-bold">Find your dream job now</div>
                <div className="text-sm md:font-semibold md:text-xl mt-2">5 lakh+ jobs for you to explore</div>
                <div className="mt-70 md:hidden">
                    <button className="py-2 px-10 w-40 rounded-3xl bg-blue-700 text-white me-1">Login</button>
                    <button className="py-2 px-10 w-40 rounded-3xl bg-amber-500 text-white ms-1">Register</button>
                </div>
                <button className="md:hidden py-2 px-10 w-82 mt-4 rounded-3xl bg-red-500 text-white ms-1">Download app</button>
                <div className="mt-8 hidden md:block">
                    <SearchBar />
                </div>
                <div className="mt-10 hidden md:block">
                    <img src="banner.PNG" width="800px"></img>
                </div>
            </div>
        </div>
    )
}