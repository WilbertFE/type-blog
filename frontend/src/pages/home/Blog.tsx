import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface Blog {
  blog: {
    content: string;
    title: string;
    googleId: string;
    _id: string;
    description: string;
  };
}
interface User {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
}

export function Blog({ blog }: Blog) {
  console.log(blog);
  const [user, setUser] = useState<null | User>(null);

  const getUser = async () => {
    const response = await fetch(
      `http://localhost:6005/api/users/${blog.googleId}`
    );
    if (response.status !== 200) {
      return;
    }
    const result = await response.json();
    setUser(result);
  };
  useEffect(() => {
    getUser();
  }, []);
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
                  <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{blog.content}</p>
          </CardContent>
          <CardFooter>
            <p>{user.username}</p>
          </CardFooter>
        </Card>
      )}
      ;
    </>
  );
}
