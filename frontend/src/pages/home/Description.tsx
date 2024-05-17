import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export const Description: React.FC = () => {
  return (
    <div className="flex flex-col m-auto gap-y-6">
      <h1 className="text-lg font-medium text-center text-light-config">
        This is a Blog App Builded by <strong>Wilbert Bernardi</strong>
      </h1>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-sm italic text-center text-light-config">
          Builded With
        </h3>
        <div className="flex justify-center gap-x-4">
          <FaReact size={32} />
          <SiTypescript size={32} />
          <RiTailwindCssFill size={32} />
          <SiShadcnui size={32} />
          <DiMongodb size={32} />
        </div>
      </div>
    </div>
  );
};
