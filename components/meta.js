import Head from "next/head";

export default ({
  name = "MUN @ GEMS",
  title = "MUN @ GEMS",
  description = `At MUN @ GEMS (March 28 & 29th), you have 
                the chance to represent cultural icons and draft solutions 
                for major issues in fictional worlds. Our committees include 
                Marvel vs. DC, Star Wars & the Wizarding World. It's a great 
                way to have fun and get started with MUN!`,
  image = "https://i.imgur.com/JOyrl4V.png",
  url = "https://mun-gems.vercel.app",
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content='#0070F3' />
    <meta name="theme-color" content='#0070F3' />
  </Head>
);
