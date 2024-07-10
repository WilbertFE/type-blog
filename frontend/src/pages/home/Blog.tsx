import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router-dom";
import { BlogInterface } from "@/types";
import { ChevronDown, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Blog(props: { blog: BlogInterface }) {
  const { blog } = props;
  const { user } = useUser(blog.creator);

  return (
    <>
      {user && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="space-y-2">
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </div>
              <div className="flex items-center gap-x-2">
                <Avatar className="border border-muted-foreground">
                  <Link to={`/user/${user.username}`}>
                    <AvatarImage
                      className="object-cover object-center"
                      src={user.image}
                      alt="profile"
                    />
                  </Link>
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-2">{blog.content}</p>
          </CardContent>
          <CardFooter>
            <div>
              <div className="flex mb-2 gap-x-4">
                <div className="flex cursor-pointer gap-x-1">
                  <ThumbsUp />
                  <span>0</span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="flex cursor-pointer gap-x-1">
                      <MessageSquare />
                      <span>0</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Comments 1.0K</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-4">
                      <div className="flex gap-x-4">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <h3>@wilbert</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Reiciendis, sint.
                          </p>
                          <div className="flex mt-2 gap-x-3">
                            <div className="flex gap-x-1">
                              <ThumbsUp strokeWidth={1} />
                              <span>0</span>
                            </div>
                            <div className="flex gap-x-1">
                              <ThumbsDown strokeWidth={1} />
                              <span>0</span>
                            </div>
                          </div>
                          <div className="flex items-center self-start mt-2 cursor-pointer">
                            <ChevronDown className="text-blue-600" />
                            <span className="font-medium text-blue-600">
                              1 replies
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="block">
                      <div className="flex">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Input
                          type="text"
                          placeholder="Add a comment"
                          className="border-t-0 border-b border-x-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-sm text-slate-400">
                {new Date(user.updatedAt || "").toDateString()}
              </p>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
