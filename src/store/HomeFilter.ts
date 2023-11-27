import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TextListType } from "../types/article";

interface NavStore {
  textList: TextListType;
  changeText: (data: TextListType) => void;
}

export const useHomeFilterStore = create<NavStore>()(
  devtools((set) => ({
    textList: {
      title: "",
      date: "",
      country: [],
    },

    changeText: (val) => {
      set((prev) => ({
        textList: { ...prev.textList, ...val },
      }));
    },
  }))
);
