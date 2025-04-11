import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex relative w-full max-w-[472px]">
      <input
        type="text"
        placeholder="Search restaurant and cuisines..."
        className="w-full h-[52px] px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchBar;
