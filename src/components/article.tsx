type ArticleProps = {
  name: string;
  desc: string;
  tags: string[];
};

function Article(props: ArticleProps) {
  return (
    <>
      {props.name}
      <p>{props.desc}</p>
      <p>{props.tags.join(", ")}</p>
      {/* {props.tags.map((tag) => {
        return <span>{tag}</span>;
      })} */}
    </>
  );
}

export default Article;
