import { create } from 'zustand';

interface LoadingState {
  loadingCount: number;
  startLoading: () => void;
  stopLoading: () => void;
}

export const useLoadingStore = create<LoadingState>((set, get) => ({
  loadingCount: 0,
  startLoading: () => set({ loadingCount: get().loadingCount + 1 }),
  stopLoading: () => set({ loadingCount: Math.max(get().loadingCount - 1, 0) }),
}));
