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
import { Heart, MessageSquare, Pencil } from "lucide-react";

export function Blog(props: {
  blog: BlogInterface;
  user: UserInterface;
  owner: boolean;
  myData: UserInterface | null;
}) {
  const { blog, user, owner, myData } = props;
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
              <div className="flex gap-x-1">
                <Heart />
                <span>20</span>
              </div>
              <div className="flex gap-x-1">
                <MessageSquare />
                <span>5</span>
              </div>
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
