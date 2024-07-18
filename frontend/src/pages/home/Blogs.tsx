import { Blog } from "./Blog.tsx";
import { useBlogs } from "@/hooks/useBlogs.ts";

export function Blogs() {
  const { blogs, isLoading } = useBlogs();

  return (
    <div className="flex flex-col mt-8">
      <h1 className="mb-2 text-xl font-bold tracking-wide text-light-config">
        All Blogs
      </h1>
      <div className="flex flex-col gap-y-6">
        {blogs &&
          blogs.length > 0 &&
          !isLoading &&
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
