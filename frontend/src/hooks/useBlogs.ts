import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";
import axios from "axios";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<null | BlogInterface[]>(null);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/blogs", {
        withCredentials: true,
      });
      const result = response.data;
      setBlogs(result);
    } catch (err: unknown) {
      console.error("Failed to get blogs data");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs };
};
