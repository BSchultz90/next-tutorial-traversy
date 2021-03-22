import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

// Below the Link Component has an href of /article/[id] and the as= alias's the article.id variable in place of the written path
// The <a> tag within the Link component will route to the specified path.
const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
