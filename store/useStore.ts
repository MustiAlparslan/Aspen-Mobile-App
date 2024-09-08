import { create } from 'zustand';

interface StoreState {
  currentCategory: string;
  currentCountry: string;
  setCurrentCategory: (category: string) => void;
  setCurrnetCountry: (c: string) => void;
}

const useStore = create<StoreState>((set) => ({
  currentCategory: 'location',
  currentCountry: 'TR',
  setCurrentCategory: (category) => set({ currentCategory: category }),
  setCurrnetCountry: (c) => set({ currentCountry: c }),
}));

export default useStore;
