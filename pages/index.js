import React, {useState} from 'react';
import BaseLayout from '../components/baselayout';
import CustomCardDeck from '../components/customCardDeck';

const Index = (props) => {
  const { blogs } = props
  const [filter, setFilter] = useState('all')

  const changeFilter = (flt) => {
    if(flt === '') {
      setFilter('all')
    }
    setFilter(flt)
  }

  const filterBlogs = blogs => {
    if (filter === 'all') {
      return blogs
    }
    return blogs.filter((blog) => {
      return blog.tag && blog.tag.toLowerCase().includes(filter.toLowerCase())
    })
  }

  return (
   <BaseLayout changeFilter={changeFilter}>
      <CustomCardDeck blogs={filterBlogs(blogs)}/>
  </BaseLayout>
  )
}


export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  return {
    props: { blogs },
  };
}

export default Index;