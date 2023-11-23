import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Text {
  [key: string]: string;
}
interface NavStore {
  textList: Text[];
  changeText: (val: object) => void;
}
export const useFilterStore = create<NavStore>()(
  devtools((set) => ({
    textList: {
      title: "",
      date: "",
      country: "",
    },

    changeText: (val) => {
      set((prev) => ({
        textList: { ...prev.textList, ...val },
      }));
    },
  }))
);
