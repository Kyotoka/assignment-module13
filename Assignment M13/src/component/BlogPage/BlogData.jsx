import React, { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
const myDatas = [
  {
    id: 1,
    title: "Project History",
    author: "Rahim 1",
    date: "2023-05-05T03:36:20Z",
    content:
      "About project History.",
  },
  {
    id: 2,
    title: "Project Mathmetics",
    author: "Rahim 2",
    date: "2022-12-05T03:36:20Z",
    content:
    "About project Mathmetics.",
  },
  {
    id: 3,
    title: "Project Biology",
    author: "Rahim 3",
    date: "2023-01-05T03:36:20Z",
    content:
    "About project Biology.",
  },
  {
    id: 4,
    title: "Project Psychology",
    author: "Rahim 4",
    date: "2023-09-05T03:36:20Z",
    content:
    "About project Psychology.",
  },
];

function BlogData() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(myDatas);
  }, []);

  return (
    <>
      <AllBlog blogs={blogs} />
    </>
  );
}

export default BlogData;