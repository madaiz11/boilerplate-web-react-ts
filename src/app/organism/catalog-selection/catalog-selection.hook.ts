import { useCartStore } from "@/core/stores/cart.store";
import type { TableItem } from "@/core/types/branded/table-item.branded.type";
import type { CatalogCategory } from "@/core/types/catalog-category.type";
import type { CatalogItem } from "@/core/types/catalog.type";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

export const useCatalogSelection = (
  categoryTableItems: TableItem<CatalogCategory>[],
  catalogItems: TableItem<CatalogItem>[],
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedItems, addItem, removeItem } = useCartStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");

  // Update category when URL changes
  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId && categoryTableItems.some((category) => category.categoryId === categoryId)) {
      setSelectedCategory(categoryId);
    }
  }, [searchParams, categoryTableItems]);

  const filteredItems: TableItem<CatalogItem>[] = useMemo(() => {
    return catalogItems.filter((catalogItem) => {
      const matchesSearch =
        catalogItem.catalogName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        catalogItem.catalogDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || catalogItem.categoryId === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, catalogItems]);

  const isItemSelected = (itemId: string) => {
    return selectedItems.some((item) => item.catalogId === itemId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId !== "All") {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return {
    selectedItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredItems,
    isItemSelected,
    handleCategoryChange,
    addItem,
    removeItem,
  };
};
