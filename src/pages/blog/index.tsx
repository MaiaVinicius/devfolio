import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";
import Seo from "@components/Seo";
import { getAllItems } from "src/lib/shared";

interface Props {
  posts: Post[];
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Seo
        title="Blog - Vini Maia"
        url="https://maiavinicius.me/blog"
        keywords={["blog Vini Maia", "maiavinicius.me blog"]}
        description="My blog - Vini Maia"
      />
      <h1>Blog posts</h1>

      <div className={styles.blogItems}>
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a href={`/blog/${post.slug}`} className={styles.blogItem}>
                <h2>{post.title}</h2>

                <p>{post.intro}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllItems<Post>("posts", ["slug", "title", "createdAt", "intro"]);

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
