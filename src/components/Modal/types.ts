import { IProduct } from "@/interfaces/IProduct";

export interface ModalProps {
  product?: IProduct;
  offModal: (onModal: boolean) => void;
}
