type BlogProps = {
  title: string;
  desc: string;
  tags: string[];
  date: string;
  isNews?: boolean;
};

type BlogStatusProps = {
  isNews?: boolean;
};

const BlogStatus = ({ isNews }: BlogStatusProps) => {
  return isNews ? (
    <p>This is a news article</p>
  ) : (
    <p>This is not a news article</p>
  );
};

const NewBlog = () => {
  return <p>This is a new blog post</p>;
};

function Article({ title, desc, tags, date, isNews }: BlogProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p>{tags.join(", ")}</p>
      <p>{date}</p>
      <p>
        <BlogStatus isNews={isNews} />
      </p>
      <p>{isNews ? "This is a news article" : "This is not a news article"}</p>
      <p>{isNews && <NewBlog />}</p>
      {/* {tags.map((tag) => {
        return <span>{tag}</span>;
      })} */}
    </>
  );
}

export default Article;
