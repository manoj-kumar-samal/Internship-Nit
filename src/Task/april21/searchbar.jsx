export default function SearchBar() {
    return (
      <div className="flex items-center justify-around bg-white shadow-md rounded-full px-4 py-2 w-full max-w-4xl mx-auto">
        
        <div className="flex items-center gap-2 flex-1 ">
          <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full bg-transparent"
          />
        </div>
  
   
        <span className=" h-5 w-px bg-gray-300"></span>
  
        <select className="text-sm text-gray-700 bg-transparent outline-none">
          <option value="">Select experience</option>
          <option value="0">Fresher</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
          <option value="4">4+ Years</option>
        </select>
  
        <span className="mx-3 h-5 w-px bg-gray-300"></span>

        <input
          type="text"
          placeholder="Enter location"
          className="outline-none text-sm text-gray-700 placeholder-gray-400 w-60 bg-transparent h-13"
        />
        <button className="ml-4 bg-blue-600 text-white font-semibold text-sm px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    );
  }
  