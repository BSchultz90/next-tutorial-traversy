import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="Web Development, programming" />
      </Head>
      <h1>Welcome to Next JS</h1>
    </div>
  );
}
