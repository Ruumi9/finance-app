"use client"
const { create } = require("zustand");

export const useSidebarStore = create((set) => ({
    isOpen: true,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false },)
}))