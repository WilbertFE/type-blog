import { BlogInterface } from "@/types";
import { CommentInterface } from "@/types/Comment";
import axios from "axios";
import { useEffect, useState } from "react";

export const useComments = ({ blog }: { blog: BlogInterface }) => {
  const [comments, setComments] = useState<[] | CommentInterface[]>([]);

  const getAllComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/comments/${blog._id}`,
        {
          withCredentials: true,
        }
      );
      if (!response.data) {
        throw new Error();
      }
      setComments(response.data);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return { comments, setComments };
};
