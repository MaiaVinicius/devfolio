import * as React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

// these should be displayed on all pages.
const DEFAULT_KEYWORDS = ["dev-maiavinicius.me", "Vini Maia", "ghostybot", "snaily cad"];

const defaults: Props = {
  title: "Vini Maia - Software Engineer",
  url: "https://maiavinicius.me",
  description: "Hi I'm Vini Maia! A Software Engineer.",
  keywords: [],
};

const Seo: React.FC<Props> = (props) => {
  const tags = {
    ...defaults,
    ...props,
  };

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="twitter:title" content={tags.title} />
      <meta property="og:site_name" content={tags.title} />
      <meta property="og:title" content={tags.title} />

      <meta name="description" content={tags.description} />
      <meta property="og:description" content={tags.description} />
      <meta name="twitter:description" content={tags.description} />

      <link rel="canonical" href={tags.url} />
      <meta property="og:url" content={tags.url} />

      <meta name="keywords" content={[...DEFAULT_KEYWORDS, ...tags.keywords].join(", ")} />
    </Head>
  );
};

export default Seo;
