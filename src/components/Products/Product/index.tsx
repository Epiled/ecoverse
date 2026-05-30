import { ForwardedRef, forwardRef } from "react";

import { IProduct } from "../../../interfaces/IProduct";

import style from "./styles.module.scss";

interface Props extends IProduct {
  selectProduct: (product: IProduct) => void;
  onModal: (onModal: boolean) => void;
  index: number;
}

const formatValue = (value: number) => {
  const formattedValue = value
    .toFixed(2)
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedValue;
};

const Product = forwardRef(
  (
    {
      descriptionShort,
      photo,
      price,
      productName,
      id,
      selected,
      selectProduct,
      onModal,
      index,
    }: Props,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li className={style.product} ref={ref} key={index} data-visible="true">
        <img src={photo} width={247} height={228} alt="#" />
        <h3 className={style.product__title}>{descriptionShort}</h3>

        <span className={style.product__oldValue}>
          R$ {formatValue(price + price * 0.0647)}
        </span>
        <span className={style.product__value}>R$ {formatValue(price)}</span>
        <span className={style.product__installment}>
          ou 2x de R$ {formatValue(price / 2)}
          sem juros
        </span>
        <span className={style.product__shipping}>Frete grátis</span>

        <button
          className={style.product__button}
          type="button"
          onClick={() => {
            selectProduct({
              descriptionShort,
              photo,
              price,
              productName,
              id,
              selected,
            });
            onModal(true);
          }}
        >
          Comprar
        </button>
      </li>
    );
  },
);

export default Product;
