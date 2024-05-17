import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useContext, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IoMdInformationCircle } from "react-icons/io";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import { Button } from "@/components/ui/button.tsx";
import { ValidationContext } from "@/contexts/validation.context";

type InputWithLabelProps = React.InputHTMLAttributes<HTMLInputElement> & {
  info: string;
};

export function InputPasswordWithLabel({
  children,
  id,
  info,
  ...restProps
}: InputWithLabelProps) {
  const { validationErrors } = useContext(ValidationContext) ?? {
    validationErrors: null,
  };
  const [isSeePassword, setIsSeePassword] = useState(false);
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center gap-x-2">
        <Label htmlFor={id} className="text-light-config">
          {children}
        </Label>
        <HoverCard>
          <HoverCardTrigger>
            <IoMdInformationCircle size={16} className="text-light-config" />
          </HoverCardTrigger>
          <HoverCardContent>{info}</HoverCardContent>
        </HoverCard>
      </div>
      <div className="flex items-center gap-x-2">
        <Input
          id={id}
          name={id}
          type={isSeePassword ? "text" : "password"}
          {...restProps}
        />
        <Button
          onClick={() => setIsSeePassword(!isSeePassword)}
          className="p-0 bg-transparent hover:bg-transparent"
        >
          {isSeePassword ? <FaEye size={20} /> : <FaRegEyeSlash size={20} />}
        </Button>
      </div>
      {validationErrors && validationErrors.length > 0 && (
        <ul className="list-disc list-inside">
          {validationErrors.map((e, i) => {
            if (!(e.path === id) || e.msg === "null") return null;
            return (
              <li key={i} className="text-sm text-red-600 list-item">
                {e.msg}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
