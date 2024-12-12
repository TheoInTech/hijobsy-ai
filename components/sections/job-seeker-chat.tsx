"use client";

import React, { useState } from "react";
import { SendButton } from "@/components/custom";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundGradient, Button } from "@/components/ui";
import { PromptSuggestion } from "@/components/custom";
import { seekerPromptSuggestions } from "@/lib/promp-suggestions";
import { useStore } from "@/store";

export const JobSeekerChat = () => {
  const { isProfileCreated, toggleIsOpenProfileSheet } = useStore();
  const [prompt, setPrompt] = useState("");

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(`Hi, Jobsy! ${suggestion}`);
  };

  return (
    <>
      <div className="flex flex-col gap-4 text-3xl font-semibold font-workSans">
        Looking for your dream job? Let&apos;s find it!
      </div>
      <BackgroundGradient className="relative w-[720px] overflow-hidden min-h-56">
        {!isProfileCreated && (
          <Button
            variant="ghost"
            className="flex text-foreground hover:text-foreground/50 hover:bg-background/20 z-20 absolute top-0 right-0 bottom-0 left-0 flex-col gap-4 justify-center items-center w-full h-full rounded-xl backdrop-blur-[1.6px] duration-300 hover:brightness-105 bg-background/20"
            onClick={toggleIsOpenProfileSheet}
          >
            Create your profile first
          </Button>
        )}
        <Textarea
          placeholder="Hi, Jobsy! I'm looking for a [role] position in [industry]. I have [X] years of experience in [skills]. I'm passionate about [interests] and looking for opportunities that allow me to [goals]."
          className="w-full rounded-lg bg-background min-h-56"
          value={prompt}
          onChange={handlePromptChange}
        />
        <SendButton className="z-10" onClick={() => alert("Send prompt")} />
      </BackgroundGradient>
      <div className="flex flex-wrap gap-4 justify-center items-center w-[720px]">
        {seekerPromptSuggestions.map((suggestion) => (
          <PromptSuggestion
            key={suggestion}
            suggestion={suggestion}
            onClick={handleSuggestionClick}
          />
        ))}
      </div>
    </>
  );
};
