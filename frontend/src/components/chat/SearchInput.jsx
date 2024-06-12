import { useState } from "react";
import toast from "react-hot-toast";

const SearchInput = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    onSearch(search);
  }

  return (
    <div className="flex items-center gap-2 w-full  px-4">
      <label className="input input-bordered flex items-center gap-2 pe-0 w-full ">
        <input
          type="text"
          className="grow "
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          className="p-2 bg-slate-200 ms-auto rounded-full me-2 hover:bg-slate-300 hover:cursor-pointer "
          onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4  opacity-70   rounded-full ">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};
export default SearchInput;
