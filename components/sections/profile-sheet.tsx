import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ConnectLinkedin, UploadCv } from "@/components/custom";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store";

export const ProfileSheet = () => {
  const { isProfileCreated } = useStore();

  return (
    <Sheet>
      {!isProfileCreated && (
        <SheetTrigger className="flex absolute top-0 right-0 bottom-0 left-0 flex-col gap-4 justify-center items-center w-full h-full rounded-2xl backdrop-blur-[1.6px] duration-300 hover:brightness-105 bg-background/20">
          Create your profile first
        </SheetTrigger>
      )}
      <SheetContent className="flex overflow-y-auto flex-col gap-4">
        <SheetHeader>
          <SheetTitle>Your profile</SheetTitle>
          <SheetDescription>
            We don&apos;t want you to fill this out again and again. Set it up
            once and we&apos;ll always use it in your job hunt!
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          <ConnectLinkedin />
          <UploadCv />
          <Textarea
            placeholder={`Tell us about yourself...

Summary:
I am a [role] with [X] years of experience in [industry/field]. Passionate about [key interests/specialties].

Experience:
[Company Name] | [Role]
[Start Date] - [End Date]
- Key achievement or responsibility
- Key achievement or responsibility

Education 
[University Name]
[Degree] in [Field]
[Graduation Year]

Skills
- Skill 1
- Skill 2
- Skill 3`}
            className="w-full rounded-lg bg-background min-h-[600px] h-full"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
