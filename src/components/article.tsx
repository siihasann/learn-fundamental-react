function Article() {
  const name = "Hasan";
  const desc = "Learn React with Hasan";
  const tags = ["react", "javascript", "frontend"];
  return (
    <div>
      <h1>Article Title</h1>
      <p>By {name}</p>
      <p>{desc}</p>
      <p>{tags.join(", ")}</p>

      {/* implement rendering of tags with a loop (map) */}
      {/* <div>
        {tags.map((tag) => {
          return <div>{tag}</div>;
        })}
      </div> */}
    </div>
  );
}

export default Article;
