import { StateCreator } from "zustand";

export interface CommonSlice {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isProfileCreated: boolean;
  setIsProfileCreated: (isProfileCreated: boolean) => void;
}

export const createCommonSlice: StateCreator<
  CommonSlice,
  [],
  [],
  CommonSlice
> = (set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  isProfileCreated: false,
  setIsProfileCreated: (isProfileCreated: boolean) =>
    set(() => ({ isProfileCreated })),
});
