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
              <div className="flex items-center">
                <Avatar className="border border-muted-foreground">
                  <Link to={`/user/${user.username}`}>
                    <AvatarImage
                      className="object-cover object-center"
                      src={user.image || "https://github.com/shadcn.png"}
                      alt="profile"
                    />
                  </Link>
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{blog.content}</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-slate-400">
              {new Date(user.updatedAt || "").toDateString()}
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
