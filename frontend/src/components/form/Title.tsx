import React from "react";

type TitleProp = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProp> = ({ children }: TitleProp) => {
  return (
    <h1 className="text-xl font-bold tracking-wide text-center text-light-config">
      {children}
    </h1>
  );
};
