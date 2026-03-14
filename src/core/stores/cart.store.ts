import { create } from "zustand";
import { type TableItem, toTableItem } from "../types/branded/table-item.branded.type";
import type { CatalogItem } from "../types/catalog.type";

interface CartState {
  selectedItems: TableItem<CatalogItem>[];
  addItem: (item: CatalogItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  selectedItems: [],
  addItem: (item) =>
    set((state) => {
      if (state.selectedItems.some((i) => i.catalogId === item.catalogId)) {
        return state;
      }
      return {
        selectedItems: [...state.selectedItems, toTableItem<CatalogItem>(item)],
      };
    }),
  removeItem: (itemId) =>
    set((state) => ({
      selectedItems: state.selectedItems.filter((item) => item.catalogId !== itemId),
    })),
  clearCart: () => set({ selectedItems: [] }),
}));

