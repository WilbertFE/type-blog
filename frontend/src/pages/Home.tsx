import React, { useEffect, useState } from "react";

import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";
import { Navbar } from "./home/Navbar";

export const Home: React.FC = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const response = await fetch("http://localhost:6005/api/users/me", {
      method: "GET",
      credentials: "include",
    });
    if (response.status !== 200) {
      setUser({});
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
          {Object.keys(user).length > 0 && !loading && <Navbar />}
          {Object.keys(user).length === 0 && !loading && (
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
