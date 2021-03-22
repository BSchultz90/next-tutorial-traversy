import { server } from "../config";
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Layout.module.css";

// This is the home page component in Next.JS
export default function Home({ articles }) {
  return (
    <div>
      {/* Import the ArticleList component and pass down articles as a prop to it. */}
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// This is where the fetch() request is called to export the data as StaticProps which loads on build time.
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
