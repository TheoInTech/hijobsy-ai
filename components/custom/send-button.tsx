import React from "react";
import { Button } from "@/components/ui";
import { PaperPlaneTilt as PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

interface ISendButton {
  onClick: () => void;
  className?: string;
}

export const SendButton = ({ onClick, className }: ISendButton) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "absolute right-2 bottom-2 px-2.5 py-4 rounded-full bg-gradient-blue",
        className
      )}
    >
      <PaperPlaneTiltIcon size={16} weight="fill" className="text-white" />
    </Button>
  );
};
