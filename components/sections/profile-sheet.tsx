import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { User as UserIcon } from "@phosphor-icons/react";
import { ConnectLinkedin, SendButton, UploadCv } from "@/components/custom";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store";

export const ProfileSheet = () => {
  const { isOpenProfileSheet, toggleIsOpenProfileSheet } = useStore();

  return (
    <Sheet open={isOpenProfileSheet} onOpenChange={toggleIsOpenProfileSheet}>
      <SheetContent className="flex overflow-y-auto flex-col gap-4">
        <SheetHeader>
          <SheetTitle className="flex gap-2 items-center">
            <UserIcon size={24} className="text-foreground/80" /> Your profile
          </SheetTitle>
          <SheetDescription>
            We don&apos;t want you to fill this out again and again. Set it up
            once and we&apos;ll always use it in your job hunt!
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          <ConnectLinkedin />
          <UploadCv />
          <div className="relative">
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
              className="w-full rounded-lg bg-background min-h-[480px] h-full"
            />
            <SendButton className="z-10" onClick={() => alert("Send prompt")} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
