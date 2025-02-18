export function getDiscountedPrice(price: number, discount?: number): number {
  if (!discount) return price;
  return price - (price * discount) / 100;
}
