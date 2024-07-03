import { Blog } from "./Blog.tsx";
import { BlogInterface } from "@/types/Blog.ts";

export function Blogs({ blogs }: { blogs: BlogInterface[] }) {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="mb-2 text-xl font-bold tracking-wide text-light-config">
        All Blogs
      </h1>
      <div className="flex flex-col gap-y-6">
        {blogs.length > 0 &&
          blogs.map((blog) => <Blog key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
}
