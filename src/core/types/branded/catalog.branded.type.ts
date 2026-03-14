export type CurrencyAmountBrandedType = number & { __brand: "currencyAmount" };

export const toCurrencyAmountBrandedType = (value: number): CurrencyAmountBrandedType => {
  return Number(value.toFixed(2)) as CurrencyAmountBrandedType;
};
