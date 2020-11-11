import React from 'react';
import BaseLayout from '../../components/baselayout';

const BlogPostPage = (props) => {
  const { title, content, more } = props.blog
  return (
    <BaseLayout>
        <div className="jumbotron text-left vertical-center" style={{padding: '30px'}}>
            <h1 className="display-4">{title}</h1>
            <hr className="my-4"/>
            <section dangerouslySetInnerHTML={{ __html: content }}></section>
            <a className="btn btn-primary btn-lg" href={more} role="button">Learn more</a>
          <style jsx>{`
            a {
              font-size: 16px;
            }
            .jumbotron {
              background-color: #F5F5F5;
              vertical-align: middle;
            }
          `}</style>
          </div>
    </BaseLayout>
  )
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const fs = require("fs");
  const html = require("remark-html");
  const highlight = require("remark-highlight.js");
  const unified = require("unified");
  const markdown = require("remark-parse");
  const matter = require("gray-matter");

  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/contents/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
            blog: {
                ...data,
          content: result.toString(),
            }
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const fs = require("fs");

    const path = `${process.cwd()}/contents`;
  const files = fs.readdirSync(path, "utf-8");

    const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;