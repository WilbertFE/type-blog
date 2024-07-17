import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const Description: React.FC = () => {
  const words = ["Wilbert_Bernardi", "Typeww", "WilbertFE"];
  const generateWords = `Builded With`;
  return (
    <div className="flex flex-col m-auto gap-y-6">
      <h1 className="text-lg font-medium text-center text-light-config">
        This is a Blog App Builded by
        <br />
        <strong>
          <FlipWords
            words={words}
            duration={2000}
            className="text-light-config"
          />
        </strong>
      </h1>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-sm italic text-center">
          <TextGenerateEffect words={generateWords} className="text-white" />
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
