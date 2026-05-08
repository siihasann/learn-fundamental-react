import type React from "react";
import blogs from "../blog.json";
import Article from "../components/article";
import { useState } from "react";
import Search from "../components/search-section";
function Home() {
  const [data, setData] = useState(blogs);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value: string) => {
    console.log("searching for", value);

    const filterBlogs = blogs.filter((item) => item.title.includes(value));
    setData(filterBlogs);
    setTotalPosts(filterBlogs.length);
  };

  return (
    <>
      <h1>My Blog</h1>
      <Search onSearch={onSearchChange} totalPosts={totalPosts} />
      <div>
        {data.map(({ title, desc, tags, date }) => {
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
