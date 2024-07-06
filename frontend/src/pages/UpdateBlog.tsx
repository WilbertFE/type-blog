import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import { useBlog } from "@/hooks/useBlog";
import { useMe } from "@/hooks/UseMe";
import { useOwner } from "@/hooks/useOwner";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { DeleteButton } from "./update/DeleteButton";
import { TbError404 } from "react-icons/tb";
import { ExpressValidationError } from "@/types/ExpressValidationError";

export function UpdateBlog() {
  const navigate = useNavigate();
  const { blogID } = useParams();

  const { myData } = useMe();
  const { blog, setBlog } = useBlog(blogID);
  const { owner, loadingOwner } = useOwner(blog?.creator, myData);
  const [errors, setErrors] = useState<null | ExpressValidationError[]>(null);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:6005/api/blogs",
        JSON.stringify(blog),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate(`/user/${result.data.creator}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data.errors) {
          const filteredErrors = err.response.data.errors.filter(
            (err: ExpressValidationError) => err.msg !== "null"
          );
          setErrors(filteredErrors);
        }
      }
      console.error(err);
    }
  };

  return (
    <main id="create" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          {owner && !loadingOwner && blog && (
            <form
              onSubmit={(e) => handleUpdate(e)}
              className="flex flex-col w-full mt-12 gap-y-6"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold tracking-wide text-light-config">
                  Edit Blog
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
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    value={blog?.title}
                    onChange={(e) =>
                      setBlog({ ...blog, title: e.target.value })
                    }
                  />
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
                  <Input
                    id="description"
                    name="description"
                    type="text"
                    value={blog?.description}
                    onChange={(e) =>
                      setBlog({ ...blog, description: e.target.value })
                    }
                  />
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
                    value={blog?.content}
                    onChange={(e) =>
                      setBlog({ ...blog, content: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex gap-x-4">
                <Button type="submit">Edit Blog</Button>
                <DeleteButton blogID={blogID} />
              </div>
            </form>
          )}
          {!blog && !owner && !loadingOwner && (
            <div className="flex flex-col items-center m-auto">
              <TbError404 size={128} className="text-light-config" />
              <h1 className="text-xl font-bold tracking-wide text-light-config">
                User not found
              </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
