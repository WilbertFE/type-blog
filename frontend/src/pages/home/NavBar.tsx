import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute left-0 right-0 flex items-center justify-between p-4 bg-secondary-config">
      <h3 className="font-bold tracking-wider text-light-config">Type Blog</h3>
      <div className="w-8 h-8 rounded-full bg-accent-config"></div>
    </nav>
  );
};
