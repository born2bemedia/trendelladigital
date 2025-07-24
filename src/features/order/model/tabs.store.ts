import { create } from 'zustand';

export const useTabsStore = create<{
  activeTab: 'orderHistory' | 'accountSettings';
  setActiveTab: (tab: 'orderHistory' | 'accountSettings') => void;
}>(set => ({
  activeTab: 'orderHistory',
  setActiveTab: tab => set({ activeTab: tab }),
}));
