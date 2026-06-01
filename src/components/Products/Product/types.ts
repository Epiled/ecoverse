import { IProduct } from "@/interfaces/IProduct";

export interface ProductProps extends IProduct {
  selectProduct: (product: IProduct) => void;
  onModal: (onModal: boolean) => void;
}
