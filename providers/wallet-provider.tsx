"use client";

import { AppInfo, PermissionType } from "arconnect";
import { ReactNode, createContext, useContext, useState } from "react";

const WALLET_PERMISSIONS: PermissionType[] = [
  "ACCESS_ADDRESS",
  "ACCESS_PUBLIC_KEY",
  "DISPATCH",
  "SIGNATURE",
  "SIGN_TRANSACTION",
];

const APP_INFO: AppInfo = {
  name: "Jobsy",
};

interface WalletContextType {
  connectWallet: () => Promise<{ success: boolean }>;
  fetchUserBalance: () => Promise<void>;
  userAddress: string;
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

interface IWalletProvider {
  children: ReactNode;
}

export const WalletProvider = ({ children }: IWalletProvider) => {
  const [userAddress, setUserAddress] = useState<string>();

  const connectWallet = async () => {
    try {
      await globalThis.arweaveWallet.connect([
        "ACCESS_ADDRESS",
        "SIGN_TRANSACTION",
      ]);
      return { success: true };
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const fetchUserBalance = async () => {
    const _connected = await connectWallet();
    if (_connected.success === false) {
      return;
    }

    try {
      const address = await globalThis.arweaveWallet.getActiveAddress();
      setUserAddress(address);
    } catch (e) {
      console.error("fetchUserBalance() error!", e);
    }
  };

  return (
    <WalletContext.Provider
      value={{ connectWallet, fetchUserBalance, userAddress }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
