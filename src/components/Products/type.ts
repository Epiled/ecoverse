import { IProduct } from "@/interfaces/IProduct";

export interface ProductsProps {
  products: IProduct[];
  selectProduct: (product: IProduct) => void;
  onModal: (onModal: boolean) => void;
}

export interface ProductList {
  link: string;
  text: string;
}
