import { IoNotificationsOutline } from "react-icons/io5";

interface User {
  user: {
    googleId: string;
    displayName: string;
    email: string;
    image: string;
    username: string;
  };
}

export function Topbar({ user }: User) {
  return (
    <div className="flex items-center justify-between mt-12">
      <div className="flex flex-1 gap-x-2">
        <img
          src={user.image}
          alt="profile"
          className="block w-12 h-12 rounded-full text-light-config"
        />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-wider text-light-config line-clamp-1">
            Hello, <strong>{user.username}!</strong>
          </h1>
          <h3 className="text-sm text-light-config">
            Lets see latest blog for you
          </h3>
        </div>
      </div>
      <div>
        <IoNotificationsOutline size={32} className="text-light-config" />
      </div>
    </div>
  );
}
