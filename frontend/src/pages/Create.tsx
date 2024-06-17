import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/utils/createBlog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { useLogin } from "@/hooks/useLogin";
import { BlogError } from "@/types/BlogError";

export function Create() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [errors, setErrors] = useState<null | BlogError[]>(null);
  const handleCreateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    const result = await createBlog(e);
    if (result.response) {
      const filteredErrors = result.response.data.errors.filter(
        (err: BlogError) => err.msg !== "null"
      );
      return setErrors(filteredErrors);
    }
    navigate("/");
  };

  // supaya tidak error
  console.log(login);

  return (
    <main id="create" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          <form
            onSubmit={(e) => handleCreateBlog(e)}
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
            {errors && (
              <div>
                <Alert variant="destructive">
                  <CircleAlert size={20} />
                  <AlertTitle>Validation Errors !</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside">
                      {errors.map((err, i) => (
                        <li className="list-item" key={i}>
                          {err.msg}
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            )}
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
