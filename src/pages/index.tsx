import blogs from "../blog.json";
import Article from "../components/article";
function Home() {
  return (
    <>
      <h1>My Blog</h1>
      {blogs.map((blog) => {
        return (
          <div>
            <Article
              title={blog.title}
              desc={blog.desc}
              tags={blog.tags}
              date={blog.date}
            />
          </div>
        );
      })}
    </>
  );
}
export default Home;
