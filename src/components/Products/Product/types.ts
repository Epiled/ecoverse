import { IProduct } from "@/interfaces/IProduct";

export interface ProductProps extends IProduct {
  index: number;
  selectProduct: (product: IProduct) => void;
  onModal: (onModal: boolean) => void;
}
