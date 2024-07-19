import { BlogInterface, LikeType, UserInterface } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export const useLikes = ({
  blog,
  myData,
}: {
  blog: BlogInterface;
  myData: UserInterface | null;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const getAllLikes = async () => {
    try {
      const result = await axios.get(
        `http://localhost:6005/api/likes/${blog._id}`,
        {
          withCredentials: true,
        }
      );
      if (!result.data) {
        throw new Error();
      }

      setLikes(result.data.length);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setIsLiked((prevState) => {
        const isMatch = result.data.filter(
          (like: LikeType) => like.userID === myData?._id
        );
        if (isMatch.length > 0) {
          return true;
        } else {
          return false;
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllLikes();
  }, [myData]);

  return { likes, isLiked, setIsLiked, setLikes };
};
