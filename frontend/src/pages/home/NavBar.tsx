import React from "react";

export const Navbar: React.FC = ({ user }) => {
  return (
    <nav className="absolute left-0 right-0 flex items-center p-4 bg-secondary-config">
      <h3 className="flex-1 font-bold tracking-wider text-light-config">
        Type Blog
      </h3>
      <div className="flex flex-col items-center gap-y-1">
        <img src={user.image} className="w-8 rounded-full" alt="profile" />
        <h3 className="text-xs text-center text-light-config">
          {user.displayName}
        </h3>
      </div>
    </nav>
  );
};
