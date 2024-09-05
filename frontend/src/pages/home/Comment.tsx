/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentInterface } from "@/types/Comment";
import { ChevronDown, ThumbsUp, Trash2 } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MyDataContext } from "@/contexts/useMe.context";
import { useContext, useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@radix-ui/react-toggle";
import { BlogInterface } from "@/types";

export function Comment({
  comment,
  setComments,
  blog,
}: {
  comment: CommentInterface;
  setComments: React.Dispatch<React.SetStateAction<[] | CommentInterface[]>>;
  blog: BlogInterface;
}) {
  const { myData } = useContext(MyDataContext);
  const { user } = useUser(comment.userID);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleDeleteComment = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:6005/api/comments/${comment._id}`
      );
      setComments((prevState) =>
        prevState.filter((comment) => comment._id !== result.data)
      );
      setDialogOpen(false);
    } catch (err) {
      console.error(err);
      setDialogOpen(false);
    }
  };

  const getAllCommentLikes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/comments/likes/${myData?._id}`
      );
      if (!response.data) {
        throw new Error("Failed to get comment likes");
      }
      setLikes(response.data.length);
      setIsLiked((prevLiked) => {
        const isMatch = response.data.filter(
          (like: { userID: string }) => like.userID === myData?._id
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

  const handleLike = async () => {
    if (!isLiked) {
      const response = await axios.post(
        "http://localhost:6005/api/comments/likes",
        JSON.stringify({ commentID: comment._id, blogID: blog._id }),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLikes((prevLike) => prevLike + 1);
      setIsLiked(true);
    } else {
      const response = await axios.delete(
        `http://localhost:6005/api/comments/likes/${comment._id}`,
        {
          withCredentials: true,
        }
      );
      setLikes((prevLike) => prevLike - 1);
      setIsLiked(false);
    }
  };

  useEffect(() => {
    getAllCommentLikes();
  }, []);

  return (
    <>
      {user && (
        <div className="flex gap-x-4">
          <Link to={`/user${user.username}`}>
            <Avatar>
              <AvatarImage src={user.image} alt={user.username} />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex flex-col flex-1">
            <Link to={`/user/${user.username}`} className="self-start">
              <h3>@{user.username}</h3>
            </Link>
            <p className="break-all">{comment.content}</p>
            <div className="flex mt-3 gap-x-3">
              <div className="flex gap-x-1">
                <Toggle
                  onClick={handleLike}
                  aria-label="Toggle bold"
                  pressed={isLiked}
                  style={isLiked ? { color: "blue" } : { color: "black" }}
                  defaultPressed={false}
                >
                  <ThumbsUp strokeWidth={1} />
                </Toggle>
                <span>{likes}</span>
              </div>
              <Badge variant="outline" className="cursor-pointer">
                Reply
              </Badge>
            </div>
            <div className="flex items-center self-start mt-2 cursor-pointer">
              <ChevronDown className="text-blue-600" />
              <span className="font-medium text-blue-600">0 replies</span>
            </div>
          </div>
          {myData?.username === user?.username && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger className="self-start">
                  <BsThreeDotsVertical className="mr-2" size={30} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setDialogOpen(true)}>
                    <div className="flex items-center justify-around gap-x-2">
                      <Trash2 />
                      <span className="text-lg">Delete</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <AlertDialog defaultOpen={false} open={dialogOpen}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your comment and remove your data from our databases.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDialogOpen(false)}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteComment}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          )}
        </div>
      )}
    </>
  );
}
