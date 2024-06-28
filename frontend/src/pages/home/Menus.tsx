import { Badge } from "@/components/ui/badge";
import { UseMeContext } from "@/contexts/useMe.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Menus() {
  const { myData } = useContext(UseMeContext);
  return (
    <div className="flex justify-between mt-8">
      <Link to="/create">
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Create Blog
        </Badge>
      </Link>
      <Link to={`/user/${myData?.username}/settings`}>
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Settings
        </Badge>
      </Link>
      <Link to={`/user/${myData?.username}`}>
        <Badge variant="default" className="px-4 py-2 bg-secondary-config">
          Profile
        </Badge>
      </Link>
    </div>
  );
}
