import { CommonSlice, createCommonSlice } from "@/store/common.slice";
import { createSelectors } from "@/store/create-selectors";
import { create } from "zustand";

type Store = CommonSlice;

const useStoreObj = create<Store>()((...a) => ({
  ...createCommonSlice(...a),
}));

export const useStore = createSelectors(useStoreObj);
