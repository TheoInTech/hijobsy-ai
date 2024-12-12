import React from "react";
import { Button } from "@/components/ui";
import { useWallet } from "@/providers/wallet-provider";
import { shortenAddress } from "@/lib/utils";
import {
  SignOut as SignOutIcon,
  SignIn as SignInIcon,
} from "@phosphor-icons/react";

export const ConnectWalletButton = () => {
  const { connectWallet, disconnectWallet, userAddress, isConnected } =
    useWallet();

  const handleClick = async () => {
    if (isConnected) {
      await disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  return (
    <Button
      variant="outline"
      className="flex gap-2 items-center py-6"
      onClick={handleClick}
    >
      {!isConnected && <SignInIcon size={16} />}
      {userAddress ? shortenAddress(userAddress) : "Connect Wallet"}
      {isConnected && <SignOutIcon size={16} />}
    </Button>
  );
};
