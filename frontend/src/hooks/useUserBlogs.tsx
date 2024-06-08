import { useEffect, useState } from "react";

type Blog = {
  content: string;
  title: string;
  googleId: string;
  _id: string;
  description: string;
};

export const useUserBlogs = (googleId: string | undefined) => {
  const [blogs, setBlogs] = useState<null | Blog[]>(null);

  const getBlogs = async () => {
    const response = await fetch(`http://localhost:6005/api/blogs/${googleId}`);
    if (response.status !== 200) {
      return;
    }
    const result = await response.json();
    setBlogs(result);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
