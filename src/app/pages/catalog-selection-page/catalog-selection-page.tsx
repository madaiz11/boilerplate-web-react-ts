import CatalogSelectionOrgrnism from "@/app/organism/catalog-selection/catalog-selection.organism";
import { type TableItem, toTableItem } from "@/core/types/branded/table-item.branded.type";
import type { CatalogCategory } from "@/core/types/catalog-category.type";
import type { CatalogItem } from "@/core/types/catalog.type";
import { categories as catalogCategories, catalogItems } from "@/mocks/catalog.mock";
import { useMemo } from "react";

const CatalogSelectionPage = () => {
  const categoryTableItems: TableItem<CatalogCategory>[] = useMemo(
    () =>
      catalogCategories.map((category) =>
        toTableItem<CatalogCategory>({
          id: category.categoryId,
          ...category,
        }),
      ),
    [],
  );

  const catalogTableItems: TableItem<CatalogItem>[] = useMemo(
    () =>
      catalogItems.map((catalogItem) =>
        toTableItem<CatalogItem>({
          id: catalogItem.catalogId,
          ...catalogItem,
        }),
      ),
    [],
  );
  return (
    <CatalogSelectionOrgrnism
      categoryTableItems={categoryTableItems}
      catalogItems={catalogTableItems}
    />
  );
};

export default CatalogSelectionPage;
