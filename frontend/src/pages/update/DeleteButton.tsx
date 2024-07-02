import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function DeleteButton({ blogID }: { blogID: string | undefined }) {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const result = await axios.delete(
        `http://localhost:6005/api/blogs/${blogID}`,
        {
          withCredentials: true,
        }
      );
      if (result.statusText === "OK") {
        navigate(`/user/${username}`);
      } else {
        throw new Error("Failed deleting blog");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Blog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your blog
            and remove your data from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
