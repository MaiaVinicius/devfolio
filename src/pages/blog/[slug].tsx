import BlogHeader from "@components/BlogHeader";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { getAllItems, getItemBySlug } from "src/lib/shared";
import { Post } from "types/Post";
import Seo from "@components/Seo";
import ReactMarkdown from "@components/ReactMarkdown";

interface Props {
  post: Post;
}

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  React.useEffect(() => {
    const mdLinks = document.querySelectorAll<HTMLAnchorElement>("#react-markdown a");

    // open all links in a new tab & add `rel="noopener noreferrer" to anchor element`
    mdLinks.forEach((link) => {
      link.rel = "noopener noreferrer";
      link.target = "_blank";
    });
  }, []);

  React.useEffect(() => {
    if (!post) {
      router.push("/404");
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  const keywords = post.keywords?.split(", ") ?? [];
  return (
    <>
      <Seo
        title={`${post.title} - MaiaVinicius's Blog`}
        description={post.intro ?? undefined}
        keywords={["blog", "blog Vinicius Maia", ...keywords]}
        url={`https://maiavinicius.me/blog/${post.slug}`}
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <BlogHeader post={post} />

      <div id="react-markdown">
        <ReactMarkdown content={post.content} />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllItems<Post>("posts", ["slug"]);

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = `${ctx.params.slug}`;
  const exists = getAllItems("posts", ["slug"]).find(
    (p) => p?.slug?.toLowerCase() === slug?.toLowerCase(),
  );

  if (!exists) {
    return {
      props: {
        post: null,
      },
    };
  }

  const post = getItemBySlug<Post>(slug, "posts", [
    "content",
    "createdAt",
    "updatedAt",
    "slug",
    "title",
    "intro",
    "keywords",
    "readingTime",
  ]);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
