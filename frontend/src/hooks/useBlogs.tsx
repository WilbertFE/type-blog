import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<null | BlogInterface[]>(null);

  const getBlogs = async () => {
    const response = await fetch("http://localhost:6005/api/blogs", {
      method: "GET",
      credentials: "include",
    });
    if (response.status !== 200) {
      return setBlogs(null);
    }
    const result = await response.json();
    setBlogs(result.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
