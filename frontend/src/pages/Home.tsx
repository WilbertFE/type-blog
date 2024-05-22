import React, { useEffect, useState } from "react";

import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";
import { Topbar } from "./home/Topbar";
import { SearchBar } from "./home/SearchBar";
import { Menus } from "./home/Menus";
import { AllBlogs } from "./home/AllBlogs";

export const Home: React.FC = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const response = await fetch("http://localhost:6005/api/users/me", {
      method: "GET",
      credentials: "include",
    });
    if (response.status !== 200) {
      setUser(null);
      setLoading(false);
      return;
    }
    const result = await response.json();
    setUser(result.user);
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <main id="home" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          {user && !loading && (
            <>
              <Topbar user={user} />
              <SearchBar />
              <Menus user={user} />
              <AllBlogs />
            </>
          )}
          {!user && !loading && (
            <>
              <SignInBar />
              <Description />
            </>
          )}
        </div>
      </div>
    </main>
  );
};
