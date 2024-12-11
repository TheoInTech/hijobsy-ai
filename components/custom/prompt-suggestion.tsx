import React from "react";
import { Button } from "@/components/ui/button";

interface IPromptSuggestion {
  suggestion: string;
  onClick: (suggestion: string) => void;
}

export const PromptSuggestion = ({
  suggestion,
  onClick,
}: IPromptSuggestion) => {
  const handleClick = () => {
    onClick(suggestion);
  };

  return (
    <Button
      onClick={handleClick}
      className="flex border hover:bg-border/50 border-foreground/20 items-center px-5 py-3 w-[320px] hover:text-foreground/75 z-10 text-foreground rounded-2xl bg-border/50"
      variant="ghost"
    >
      <span className="truncate">{suggestion}</span>
    </Button>
  );
};
