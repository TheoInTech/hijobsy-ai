import { StateCreator } from "zustand";

export enum EUserType {
  SEEKER = "seeker",
  RECRUITER = "recruiter",
}

export interface CommonSlice {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isProfileCreated: boolean;
  setIsProfileCreated: (isProfileCreated: boolean) => void;
  userType: EUserType;
  setUserType: (userType: EUserType) => void;
  isOpenProfileSheet: boolean;
  setIsOpenProfileSheet: (isOpenProfileSheet: boolean) => void;
  toggleIsOpenProfileSheet: () => void;
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
  userType: EUserType.SEEKER,
  setUserType: (userType: EUserType) => set(() => ({ userType })),
  isOpenProfileSheet: false,
  setIsOpenProfileSheet: (isOpenProfileSheet: boolean) =>
    set(() => ({ isOpenProfileSheet })),
  toggleIsOpenProfileSheet: () =>
    set((state) => ({ isOpenProfileSheet: !state.isOpenProfileSheet })),
});
