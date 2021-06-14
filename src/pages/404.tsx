import { NextPage } from "next";
import Head from "next/head";
import styles from "css/404.module.scss";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found • 404 - Vinicius Maia</title>
        <meta property="og:title" content="Page Not Found - Vinicius Maia" />
        <link rel="canonical" href="https://maiavinicius.me/404" />
      </Head>
      <div className={styles.container404}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </>
  );
};

export default Custom404;
