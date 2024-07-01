import { BlogInterface } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useBlog = (blogID: string | undefined) => {
  const [blog, setBlog] = useState<null | BlogInterface>(null);
  const getBlog = async () => {
    try {
      const result = await axios.get(
        `http://localhost:6005/api/blogs/blog/${blogID}`,
        {
          withCredentials: true,
        }
      );
      setBlog(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (blogID) {
      getBlog();
    }
  }, [blogID]);

  return { blog, setBlog };
};
