type ArticleProps = {
  name: string;
  desc: string;
  tags: string[];
};

type BlogProps = {
  title: string;
  desc: string;
  tags: string[];
  date: string;
};
function Article(props: BlogProps) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p>{props.tags.join(", ")}</p>
      <p>{props.date}</p>
      {/* {props.tags.map((tag) => {
        return <span>{tag}</span>;
      })} */}
    </>
  );
}

export default Article;
