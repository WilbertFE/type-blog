import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";
import axios from "axios";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<null | BlogInterface[]>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/blogs");
      const result = response.data;
      setBlogs(result);

      setIsLoading(false);
    } catch (err: unknown) {
      console.error("Failed to get blogs data");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, isLoading, setIsLoading };
};
