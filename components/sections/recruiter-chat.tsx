"use client";

import React, { useState } from "react";
import { SendButton } from "@/components/custom";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundGradient } from "@/components/ui";
import { recruiterPromptSuggestions } from "@/lib/promp-suggestions";
import { PromptSuggestion } from "@/components/custom";

export const RecruiterChat = () => {
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
        Describe your perfect hire. We&apos;ll connect you!
      </div>
      <BackgroundGradient className="relative w-[720px] overflow-hidden min-h-56">
        <Textarea
          placeholder="Hi, Jobsy! I'm looking to hire a [role] in [industry]. The ideal candidate has [X] years of experience in [skills]. We need someone who is passionate about [interests] and will help our company [goals]."
          className="w-full rounded-lg bg-background min-h-56"
          value={prompt}
          onChange={handlePromptChange}
        />
        <SendButton className="z-10" onClick={() => alert("Send prompt")} />
      </BackgroundGradient>
      <div className="flex flex-wrap gap-4 justify-center items-center w-[720px]">
        {recruiterPromptSuggestions.map((suggestion) => (
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
