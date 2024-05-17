import React from "react";

import { SignInBar } from "./home/SignInBar";
import { Description } from "./home/Description";

export const Home: React.FC = () => {
  return (
    <main id="home" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          <SignInBar />
          <Description />
        </div>
      </div>
    </main>
  );
};
