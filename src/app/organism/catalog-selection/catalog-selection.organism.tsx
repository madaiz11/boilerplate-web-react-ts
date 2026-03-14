import { Button } from "@/app/atoms";
import { Input } from "@/app/atoms/input";
import CatalogProductCard from "@/app/molecules/catalog-product-card/catalog-product-card.molecules";
import type { TableItem } from "@/core/types/branded/table-item.branded.type";
import type { CatalogCategory } from "@/core/types/catalog-category.type";
import type { CatalogItem } from "@/core/types/catalog.type";
import { Search } from "lucide-react";
import { useCatalogSelection } from "./catalog-selection.hook";

type CatalogSelectionOrgrnismProps = {
  categoryTableItems: TableItem<CatalogCategory>[];
  catalogItems: TableItem<CatalogItem>[];
};

const CatalogSelectionOrgrnism = ({
  categoryTableItems,
  catalogItems,
}: CatalogSelectionOrgrnismProps) => {
  const {
    selectedItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    filteredItems,
    isItemSelected,
    handleCategoryChange,
    addItem,
    removeItem,
  } = useCatalogSelection(categoryTableItems, catalogItems);

  return (
    <>
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 transform text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => handleCategoryChange("All")} size="sm">
            All
          </Button>
          {categoryTableItems.map((category) => (
            <Button
              key={category.renderKey}
              variant={selectedCategory === category.categoryId ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.categoryId)}
              size="sm"
            >
              {category.categoryName}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-muted-foreground text-sm">
          Showing {filteredItems.length} {filteredItems.length === 1 ? "product" : "products"}
        </p>
      </div>

      {/* Product Grid */}
      {filteredItems.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">No products found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => {
            const selected = isItemSelected(item.catalogId);
            return (
              <CatalogProductCard
                key={item.renderKey}
                catalog={item}
                selected={selected}
                onSelect={addItem}
                onUnselect={removeItem}
              />
            );
          })}
        </div>
      )}

      {/* Selected Items Summary */}
      {selectedItems.length > 0 && (
        <div className="fixed right-6 bottom-6 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-lg">
          <p className="font-semibold">
            {selectedItems.length} {selectedItems.length === 1 ? "item" : "items"} selected
          </p>
        </div>
      )}
    </>
  );
};

export default CatalogSelectionOrgrnism;
