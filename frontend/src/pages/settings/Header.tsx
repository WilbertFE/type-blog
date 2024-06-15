import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center pt-8">
      <div className="text-light-config">
        <Link to="/">
          <CircleArrowLeft size={40} />
        </Link>
      </div>
      <div className="flex-1 -ml-4 text-center">
        <h1 className="text-2xl font-bold tracking-wider text-light-config">
          My Account
        </h1>
      </div>
    </div>
  );
}
