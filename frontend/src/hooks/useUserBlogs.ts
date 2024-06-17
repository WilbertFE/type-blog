import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";
import axios from "axios";

export const useUserBlogs = (username: string | undefined) => {
  const [blogs, setBlogs] = useState<null | BlogInterface[]>(null);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/blogs/${username}`
      );
      const result = response.data;
      setBlogs(result);
    } catch (err: unknown) {
      console.error("Failed to get user blog");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
