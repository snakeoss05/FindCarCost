import Conversations from "./conversations";
import SearchInput from "./SearchInput";
import axios from "axios";
import { useState } from "react";

export default function Sidebar() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/getFriends?query=${query}`
      );
      setResults(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="border-0 lg:border-r lg:border-slate-500 pt-4 flex flex-col ">
      <SearchInput onSearch={handleSearch} />
      <div className="divider px-3"></div>
      <Conversations results={results} />
    </div>
  );
}
