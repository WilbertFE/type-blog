import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

export function Create() {
  const navigate = useNavigate();
  const createBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const blogData = {
      title: (target.elements.namedItem("title") as HTMLInputElement).value,
      description: (
        target.elements.namedItem("description") as HTMLInputElement
      ).value,
      content: (target.elements.namedItem("content") as HTMLInputElement).value,
    };
    try {
      const response = await fetch("http://localhost:6005/api/blogs", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.status !== 201) {
        throw new Error();
      }
      navigate("/my-blog");
    } catch (err: unknown) {
      console.log("failed to create blog");
    }
  };
  return (
    <main id="create" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          <form
            onSubmit={(e) => createBlog(e)}
            className="flex flex-col w-full mt-12 gap-y-6"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-wide text-light-config">
                Create Blog
              </h1>
              <span className="text-sm font-medium text-light-config">
                fill your mind
              </span>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <Label
                  htmlFor="title"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Title
                </Label>
                <h3 className="mb-2 text-xs text-slate-300">
                  Blog title (min. 3 characters)
                </h3>
                <Input id="title" name="title" type="text" />
              </div>
              <div className="flex flex-col">
                <Label
                  htmlFor="description"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Description
                </Label>
                <h3 className="mb-2 text-xs text-slate-300">
                  Short description (optional)
                </h3>
                <Input id="description" name="description" type="text" />
              </div>
              <div className="flex flex-col">
                <Label
                  htmlFor="content"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Content
                </Label>
                <h3 className="mb-2 text-xs text-slate-300">Blog content</h3>
                <Textarea
                  name="content"
                  id="content"
                  placeholder="type your blog here"
                />
              </div>
            </div>
            <div className="flex">
              <Button type="submit">Create Blog</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
