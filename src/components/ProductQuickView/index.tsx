import React from "react";

import { IProduct } from "@/interfaces/IProduct";

import { useQuantity } from "../Modal/useQuantity";

import { formatPrice } from "@/utils/formatPrice";

import style from "./styles.module.scss";

const ProductQuickView: React.FC<IProduct> = ({
  descriptionShort,
  photo,
  price,
  productName,
  id,
}) => {
  const { quantity, increment, decrement, update } = useQuantity();

  return (
    <div className={style.productQuickView}>
      <div
        className={`${style.productQuickView__container} ${style["productQuickView__container--image"]}`}
      >
        <img
          src={photo}
          className={style.productQuickView__image}
          alt={productName}
        />
      </div>
      <div className={style.productQuickView__container}>
        <h3 className={style.productQuickView__title}>{productName}</h3>
        <span className={style.productQuickView__price}>
          R$ {price && formatPrice(price)}
        </span>
        <p className={style.productQuickView__text}>{descriptionShort}</p>
        <span className={style.productQuickView__extra}>
          Veja mais detalhes do produto
        </span>

        <div className={style.productQuickView__inputs}>
          <button
            className={style.productQuickView__arithmetic}
            onClick={decrement}
          >
            -
          </button>
          <input
            className={style.productQuickView__quantity}
            type="number"
            value={quantity}
            onChange={(e) => update(e.target.value)}
          />
          <button
            className={style.productQuickView__arithmetic}
            onClick={increment}
          >
            +
          </button>
        </div>
        <button
          className={style.productQuickView__button}
          onClick={() => {
            return id;
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductQuickView;
