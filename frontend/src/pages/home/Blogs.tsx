import { Blog } from "./Blog.tsx";
import { useEffect, useState } from "react";

interface Blog {
  content: string;
  title: string;
  googleId: string;
  _id: string;
  description: string;
}

export function Blogs() {
  const [blogs, setBlogs] = useState<null | Blog[]>(null);
  const getBlogs = async () => {
    const response = await fetch("http://localhost:6005/api/blogs", {
      method: "GET",
      credentials: "include",
    });
    if (response.status !== 200) {
      return setBlogs(null);
    }
    const result = await response.json();
    setBlogs(result);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="flex flex-col mt-8">
      <h1 className="mb-2 text-xl font-bold tracking-wide text-light-config">
        All Blogs
      </h1>
      <div className="flex flex-col gap-y-6">
        {blogs && blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
