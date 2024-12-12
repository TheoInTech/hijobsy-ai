"use client";

import { ssr } from "arnext";
import { useEffect, useState } from "react";

// components
import {
  FloatingControls,
  JobSeekerChat,
  RecruiterChat,
} from "@/components/sections";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { useStore } from "@/store";
import { EUserType } from "@/store/common.slice";

const getDate = async (date) => date ?? Date.now();

export const getStaticProps = ssr(async ({}) => {
  return { props: { _date: Date.now() }, revalidate: 100 };
});

export default function Home({ _date = null }) {
  const [date, setDate] = useState(_date);
  const { setUserType, userType } = useStore();

  const handleSetUserType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserType(event.currentTarget.value as EUserType);
  };

  useEffect(() => {
    (async () => _date ?? setDate(await getDate(_date)))();
  }, []);

  return (
    <div className="relative w-screen h-screen bg-border/50">
      <FloatingControls />

      <div className="flex flex-col gap-8 justify-center items-center w-full min-h-screen">
        <div className="flex gap-2 p-2 rounded-md bg-border">
          <Button
            variant="outline"
            value={EUserType.SEEKER}
            onClick={handleSetUserType}
            className={cn(
              userType === EUserType.SEEKER &&
                "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Job Seeker
          </Button>
          <Button
            variant="outline"
            value={EUserType.RECRUITER}
            onClick={handleSetUserType}
            className={cn(
              userType === EUserType.RECRUITER &&
                "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Recruiter
          </Button>
          <Tooltip>
            <TooltipTrigger
              className="px-3 py-1 text-sm font-semibold rounded-md bg-background/50 text-foreground/50"
              disabled
            >
              Recommend
            </TooltipTrigger>
            <TooltipContent>
              <p>Soon.</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {userType === EUserType.SEEKER && <JobSeekerChat />}
        {userType === EUserType.RECRUITER && <RecruiterChat />}
      </div>
    </div>
  );
}
