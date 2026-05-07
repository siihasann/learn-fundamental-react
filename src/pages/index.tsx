import type React from "react";
import blogs from "../blog.json";
import Article from "../components/article";
import { useState } from "react";
function Home() {
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>My Blog</h1>
      <div>
        <p>Search blog here:</p>
        <input type="text" onChange={handleSearch} />
      </div>
      <small>mencari kata {search}</small>
      <div>
        {blogs.map(({ title, tags, desc, date }) => {
          return (
            <div key={title}>
              <Article title={title} desc={desc} tags={tags} date={date} />
              {/* <Article {...{ title, desc, tags, date }} /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
