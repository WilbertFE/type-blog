import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center pt-8">
      <div>
        <Link to="/">
          <IoArrowBackCircleOutline size={40} className="text-light-config" />
        </Link>
      </div>
      <div className="flex-1 -ml-4 text-center">
        <h1 className="tracking-wider text-2xlfont-bold text-light-config">
          My Account
        </h1>
      </div>
    </div>
  );
}
