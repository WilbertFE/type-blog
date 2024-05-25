import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type User = {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
};

export function Menus(props: { user: User }) {
  const { user } = props;
  return (
    <div className="flex justify-between mt-8">
      <Link to="/create">
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Create Blog
        </Badge>
      </Link>
      <Link to={`/user/${user.username}/blogs`}>
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          My Blog
        </Badge>
      </Link>
      <Link to={`/user/${user.username}`}>
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Profile
        </Badge>
      </Link>
    </div>
  );
}
