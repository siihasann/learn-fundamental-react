import { useState } from "react";

interface SearchProps {
  onSearch: (value: string) => void;
  totalPosts: number;
}

function Search(props: SearchProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };
  return (
    <>
      <div>
        <p>Search blog here:</p>
        <input type="text" onChange={handleSearch} />
      </div>
      <small>
        mencari {props.totalPosts} data dengan kata {search}
      </small>
    </>
  );
}

export default Search;
