import { create } from "zustand";

type ContactButtonState = {
  isClicked: boolean;
  setClicked: () => void;
  reset: () => void;
};

const useContactButtonClicked = create<ContactButtonState>((set) => ({
  isClicked: false,

  setClicked: () => set({ isClicked: true }),

  reset: () => set({ isClicked: false }),
}));

export default useContactButtonClicked;
