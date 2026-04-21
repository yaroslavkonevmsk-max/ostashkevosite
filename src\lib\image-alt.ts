import type { Product } from "@/data/catalog";

export function getProductImageAlt(product: Product, detail?: string) {
  if (detail) {
    return `${product.name} — ${detail}, сухая строганная продукция из хвои от производителя`;
  }

  return `${product.name} — сухая строганная продукция из хвои, B2B-поставка от производителя`;
}

export function getFactoryImageAlt(subject: string) {
  return `${subject} на производстве завода строганной продукции`;
}
