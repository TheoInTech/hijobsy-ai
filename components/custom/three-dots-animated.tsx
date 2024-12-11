import React from "react";

export const ThreeDotsAnimated = () => {
  return (
    <div className="flex gap-1">
      <div className="w-1 h-1 rounded-full bg-accent animate-[bounce_1s_ease-in-out_infinite]" />
      <div className="w-1 h-1 rounded-full bg-primary animate-[bounce_1s_ease-in-out_infinite_0.2s]" />
      <div className="w-1 h-1 rounded-full bg-secondary animate-[bounce_1s_ease-in-out_infinite_0.4s]" />
    </div>
  );
};
