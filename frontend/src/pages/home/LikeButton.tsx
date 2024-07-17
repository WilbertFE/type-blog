import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BlogInterface, LikeType } from "@/types";
import { UseMeContext } from "@/contexts/useMe.context";

export function LikeButton({ blog }: { blog: BlogInterface }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const { myData } = useContext(UseMeContext);

  const getAllLikes = async () => {
    try {
      const result = await axios.get(
        `http://localhost:6005/api/likes/${blog._id}`,
        {
          withCredentials: true,
        }
      );
      if (result.data) {
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
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllLikes();
  }, []);

  const handleLikes = async () => {
    try {
      if (!isLiked) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(
          `http://localhost:6005/api/likes/${blog._id}`,
          { withCredentials: true }
        );
        setIsLiked(true);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.delete("http://localhost:6005/api/likes", {
          withCredentials: true,
        });
        setIsLiked(false);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex items-center cursor-pointer gap-x-1">
      <Toggle onClick={handleLikes} aria-label="Toggle bold" pressed={isLiked}>
        <ThumbsUp />
      </Toggle>
      <span>{likes}</span>
    </div>
  );
}
