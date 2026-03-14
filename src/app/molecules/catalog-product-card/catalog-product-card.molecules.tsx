import { Badge, Button } from "@/app/atoms";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/atoms/card";
import type { TableItem } from "@/core/types/branded/table-item.branded.type";
import type { CatalogItem } from "@/core/types/catalog.type";
import { Check, Plus } from "lucide-react";

type CatologProducCardProps = {
  catalog: TableItem<CatalogItem>;
  selected: boolean;
  onSelect: (catalog: TableItem<CatalogItem>) => void;
  onUnselect: (catalogId: string) => void;
};

const CatalogProductCard = ({
  catalog,
  selected,
  onSelect,
  onUnselect,
}: CatologProducCardProps) => {
  return (
    <Card key={catalog.renderKey} className="flex flex-col overflow-hidden">
      <div className="relative">
        <img
          src={catalog.catalogImageUrl}
          alt={catalog.catalogName}
          className="h-48 w-full object-cover"
        />
        {!catalog.inStock && <Badge className="absolute top-2 right-2">Out of Stock</Badge>}
        {selected && (
          <div className="absolute top-2 left-2 rounded-full bg-green-500 p-1 text-white">
            <Check className="size-4" />
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{catalog.catalogName}</CardTitle>
          <Badge variant="outline">{catalog.categoryName}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="mb-4 text-muted-foreground text-sm">{catalog.catalogDescription}</p>
        <p className="text-2xl">${catalog.catalogPrice}</p>
      </CardContent>

      <CardFooter>
        {selected ? (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onUnselect(catalog.catalogId)}
          >
            <Check className="mr-2 size-4" />
            Selected
          </Button>
        ) : (
          <Button className="w-full" onClick={() => onSelect(catalog)} disabled={!catalog.inStock}>
            <Plus className="mr-2 size-4" />
            {catalog.inStock ? "Select Item" : "Out of Stock"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CatalogProductCard;
