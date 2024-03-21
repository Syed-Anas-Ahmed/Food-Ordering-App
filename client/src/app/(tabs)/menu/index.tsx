import products from "@assets/data/products";
import { ProductListItem } from "@components/ProductListItem";

export default function MenuScreen() {
  return <ProductListItem products={products} />;
}
