import React from "react";
import { Button } from "@/components/ui/button";

export const ConnectLinkedin = () => {
  const handleConnectLinkedin = () => {
    console.log("Connect LinkedIn");
  };

  return (
    <Button
      className="w-full bg-[#0B65C2] text-white"
      onClick={handleConnectLinkedin}
    >
      Import LinkedIn Profile
    </Button>
  );
};
