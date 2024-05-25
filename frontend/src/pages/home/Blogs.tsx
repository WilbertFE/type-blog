import { useBlogs } from "@/hooks/useBlogs.tsx";
import { Blog } from "./Blog.tsx";

export function Blogs() {
  const { blogs } = useBlogs();
  return (
    <div className="flex flex-col mt-8">
      <h1 className="mb-2 text-xl font-bold tracking-wide text-light-config">
        All Blogs
      </h1>
      <div className="flex flex-col gap-y-6">
        {blogs &&
          blogs.length > 0 &&
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
