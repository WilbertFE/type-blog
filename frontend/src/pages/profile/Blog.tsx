import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { BlogInterface, UserInterface } from "@/types";
import { Pencil } from "lucide-react";
import { useContext } from "react";
import { MyDataContext } from "@/contexts/useMe.context";
import { LikeButton } from "../home/LikeButton";
import { CommentDialog } from "../home/CommentDialog";

export function Blog(props: {
  blog: BlogInterface;
  user: UserInterface;
  owner: boolean;
}) {
  const { blog, user, owner } = props;
  const { myData } = useContext(MyDataContext);
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div className="space-y-2">
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.description}</CardDescription>
            </div>
            <div className="flex items-center gap-x-2">
              {owner && (
                <Link to={`/user/${user.username}/blog/${blog._id}/edit`}>
                  <Pencil />
                </Link>
              )}
              <Avatar className="border border-muted-foreground">
                <Link to={`/user/${user.username}`}>
                  <AvatarImage
                    className="object-cover object-center"
                    src={owner ? myData?.image : user.image}
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
              <LikeButton blog={blog} />
              <CommentDialog blog={blog} />
            </div>
            <p className="text-sm text-slate-400">
              {new Date(user.updatedAt || "").toDateString()}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
