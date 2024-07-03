import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";
import axios from "axios";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<null | BlogInterface[]>(null);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/blogs");
      const result = response.data;
      setBlogs(result);

      setLoading(false);
    } catch (err: unknown) {
      console.error("Failed to get blogs data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return { blogs, loading, setLoading };
};
