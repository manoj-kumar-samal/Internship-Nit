import SearchBar from "./searchbar";


export default function Main() {
    return (
        <div className="mt-10 flex justify-center items-center text-center md:mt-32">
            <div>
                <img src="title.PNG" className="ms-18 md:hidden  mb-4"></img>
                <div className="text-2xl md:text-4xl font-bold">Find your dream job now</div>
                <div className="text-sm md:font-semibold md:text-xl mt-2">5 lakh+ jobs for you to explore</div>
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