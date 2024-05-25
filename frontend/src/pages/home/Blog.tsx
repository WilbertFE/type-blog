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

type Blog = {
  content: string;
  title: string;
  googleId: string;
  _id: string;
  description: string;
};

export function Blog(props: { blog: Blog }) {
  const { blog } = props;
  const { user } = useUser(blog.googleId);

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
                <Avatar>
                  <AvatarImage
                    src={user.image || "https://github.com/shadcn.png"}
                    alt="profile"
                  />
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
              {new Date(user.updatedAt).toDateString()}
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
