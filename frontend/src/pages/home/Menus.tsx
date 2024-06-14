import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { UserInterface } from "@/types";

export function Menus(props: { user: UserInterface }) {
  const { user } = props;
  return (
    <div className="flex justify-between mt-8">
      <Link to="/create">
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Create Blog
        </Badge>
      </Link>
      <Link to={`/user/${user.username}/settings`}>
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Settings
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
