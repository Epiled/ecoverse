import { ForwardedRef, forwardRef } from "react";

import ProductQuickView from "@/components/ProductQuickView";

import { IProduct } from "@/interfaces/IProduct";

import { useModalContext } from "@/contexts/ModalContext";

import { formatPrice } from "@/utils/formatPrice";

import style from "./styles.module.scss";

const Product = forwardRef(
  (
    { descriptionShort, photo, price, productName, id }: IProduct,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const { onModal } = useModalContext();

    return (
      <li className={style.product} ref={ref} data-visible="true">
        <img src={photo} width={247} height={228} alt="#" />
        <h3 className={style.product__title}>{descriptionShort}</h3>

        <span className={style.product__oldValue}>
          R$ {formatPrice(price + price * 0.0647)}
        </span>
        <span className={style.product__value}>R$ {formatPrice(price)}</span>
        <span className={style.product__installment}>
          ou 2x de R$ {formatPrice(price / 2)}
          sem juros
        </span>
        <span className={style.product__shipping}>Frete grátis</span>

        <button
          className={style.product__button}
          type="button"
          onClick={() => {
            const product = { descriptionShort, photo, price, productName, id };
            onModal(<ProductQuickView {...product} />);
          }}
        >
          Comprar
        </button>
      </li>
    );
  },
);

export default Product;
