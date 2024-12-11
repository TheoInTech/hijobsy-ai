import React from "react";
import { Button } from "@/components/ui";
import { useWallet } from "@/providers/wallet-provider";

export const ConnectWalletButton = () => {
  const { connectWallet, userAddress } = useWallet();

  const handleClick = async () => {
    await connectWallet();
  };

  return (
    <Button variant="outline" className="py-6" onClick={handleClick}>
      {userAddress ? userAddress : "Connect Wallet"}
    </Button>
  );
};
