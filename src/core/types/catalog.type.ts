import {
  type CurrencyAmountBrandedType,
  toCurrencyAmountBrandedType,
} from "./branded/catalog.branded.type";
import type { CatalogCategory } from "./catalog-category.type";

export type CatalogItem = CatalogCategory & {
  catalogId: string;
  catalogName: string;
  catalogDescription: string;
  catalogPrice: CurrencyAmountBrandedType;
  catalogImageUrl: string;
  catalogInStock: boolean;
  inStock: boolean;
};

export const toCatalogItem = (catalogItem: CatalogItem): CatalogItem => {
  return {
    ...catalogItem,
    catalogPrice: toCurrencyAmountBrandedType(catalogItem.catalogPrice),
  };
};
