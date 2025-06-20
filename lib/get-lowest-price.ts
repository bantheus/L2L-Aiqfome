export function getLowestPrice(
  sizes: { price: number; promoPrice?: number | null }[],
) {
  return Math.min(...sizes.map((s) => s.promoPrice ?? s.price));
}
