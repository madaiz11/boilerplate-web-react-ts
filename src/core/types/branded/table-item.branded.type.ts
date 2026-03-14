import { randomId } from "@/core/utils/random-id";

export type RenderKeyType = string & { __brand: "renderKey" };

export type RawTableItemType<T> = T & {
  id?: string | number;
};

export type TableItem<T> = RawTableItemType<T> & {
  renderKey: RenderKeyType;
} & { __brand: "tableItem" };

export const toTableItem = <T>(value: RawTableItemType<T>): TableItem<T> => {
  const renderKey = value.id?.toString() ?? randomId();
  return {
    ...value,
    renderKey: renderKey as RenderKeyType,
  } as TableItem<T>;
};
