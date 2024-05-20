import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export const Topbar: React.FC = ({ user }) => {
  return (
    <div className="flex items-center justify-between mt-12">
      <div className="flex flex-1 gap-x-2">
        <div className="w-12 h-12 bg-black rounded-full"></div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-wider text-light-config">
            Hello, Wilbert!
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
};
