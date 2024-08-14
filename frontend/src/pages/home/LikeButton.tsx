import { Toggle } from "@/components/ui/toggle";
import { ThumbsUp } from "lucide-react";
import { useContext } from "react";
import { BlogInterface } from "@/types";
import { MyDataContext } from "@/contexts/useMe.context";
import { useLikes } from "@/hooks/useLikes";
import axios from "axios";

export function LikeButton({ blog }: { blog: BlogInterface }) {
  const { myData } = useContext(MyDataContext);
  const { likes, isLiked, setLikes, setIsLiked } = useLikes({ blog, myData });

  const handleLike = async () => {
    try {
      if (!isLiked) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(
          `http://localhost:6005/api/likes/${blog._id}`,
          JSON.stringify({}),
          { withCredentials: true }
        );
        setLikes((prevState) => prevState + 1);
        setIsLiked(true);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.delete(`http://localhost:6005/api/likes`, {
          withCredentials: true,
        });
        setLikes((prevState) => prevState - 1);
        setIsLiked(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center cursor-pointer gap-x-1">
      <Toggle
        onClick={handleLike}
        aria-label="Toggle bold"
        defaultPressed={false}
        pressed={isLiked}
      >
        <ThumbsUp />
      </Toggle>
      <span>{likes}</span>
    </div>
  );
}
