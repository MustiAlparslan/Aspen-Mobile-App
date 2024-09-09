import { create } from 'zustand';

interface StoreState {
  currentCategory: string;
  currentCountry: string;
  details: object;
  setCurrentCategory: (category: string) => void;
  setCurrnetCountry: (c: string) => void;
  setDetails: (detail: object) => void;
}

const useStore = create<StoreState>((set) => ({
  currentCategory: 'location',
  currentCountry: 'TR',
  details: {},
  setCurrentCategory: (category) => set({ currentCategory: category }),
  setCurrnetCountry: (c) => set({ currentCountry: c }),
  setDetails: (detail) => set({ details: detail }),
}));

export default useStore;
