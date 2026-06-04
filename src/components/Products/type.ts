import { IProduct } from "@/interfaces/IProduct";

export interface ProductsProps {
  products: IProduct[];
  selectProduct: (product: IProduct) => void;
}

export interface ProductList {
  link: string;
  text: string;
}
