import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const getAllLikes = async () => {
    try {
      const likes = await axios.get("http://localhost:6005/api/likes", {
        withCredentials: true,
      });
      console.log("likes result : ", likes);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllLikes();
  }, []);

  const handleLikes = async () => {
    try {
      if (isLiked) {
        const result = await axios.post(
          "http://localhost:6005/api/likes",
          undefined,
          { withCredentials: true }
        );
        console.log("like result", result);
      } else {
        const result = await axios.delete("http://localhost:6005/api/likes", {
          withCredentials: true,
        });
        console.log("delete like result", result);
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
      <span>0</span>
    </div>
  );
}
