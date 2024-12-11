import React from "react";
import { Button } from "@/components/ui/button";

export const UploadCv = () => {
  const handleUploadCv = () => {
    alert("Upload CV");
  };

  return (
    <Button
      className="px-2 py-4 w-full"
      onClick={handleUploadCv}
      variant="outline"
    >
      Upload your Resume / CV
    </Button>
  );
};
