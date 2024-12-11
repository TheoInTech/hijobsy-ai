import React from "react";

import { ConnectWalletButton, ThemeToggle } from "@/components/custom";
import { ProfileSheet } from "@/components/sections";
import { Button, SidebarTrigger } from "@/components/ui";
import { useStore } from "@/store";
import { EUserType } from "@/store/common.slice";
import { User as UserIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const FloatingControls = () => {
  const { setIsProfileCreated, userType, toggleIsOpenProfileSheet } =
    useStore();
  const { theme } = useTheme();

  const handleCreateProfile = () => {
    setIsProfileCreated(true);
  };

  return (
    <>
      <ProfileSheet />

      <div className="flex absolute top-4 left-4 gap-2">
        <SidebarTrigger />
        {theme === "dark" ? (
          <Image
            src="/assets/logo-white-2.png"
            alt="Jobsy Logo"
            width={2880}
            height={1620}
            className="-mt-4 w-full h-20"
          />
        ) : (
          <Image
            src="/assets/logo-black-2.png"
            alt="Jobsy Logo"
            width={2880}
            height={1620}
            className="-mt-4 w-full h-20"
          />
        )}
      </div>

      <div className="flex absolute top-4 right-4 gap-2 items-center">
        <ConnectWalletButton />
        <ThemeToggle />
        {userType === EUserType.SEEKER && (
          <Button
            variant="outline"
            size="icon"
            onClick={toggleIsOpenProfileSheet}
          >
            <UserIcon
              size={24}
              className="absolute transition-all text-foreground/80"
            />
          </Button>
        )}
      </div>

      {/* Temporay create profile button for demo */}
      {userType === EUserType.SEEKER && (
        <Button
          variant="outline"
          onClick={handleCreateProfile}
          className="fixed right-4 bottom-4"
        >
          Temporary Create Profile
        </Button>
      )}
    </>
  );
};
