import React from "react";

import { ModalProps } from "./types";

import { useQuantity } from "./useQuantity";

import { formatPrice } from "@/utils/formatPrice";

import photo from "@/assets/img/mobile.png";

import style from "./styles.module.scss";
import { useModalContext } from "@/contexts/ModalContext";

const Modal: React.FC<ModalProps> = ({ product }) => {
  const { quantity, increment, decrement, update } = useQuantity();

  const { offModal } = useModalContext();

  return (
    <aside className={style.modal}>
      <div className={style.modal__box}>
        <div
          className={`${style.modal__container} ${style["modal__container--image"]}`}
        >
          <img src={photo} className={style.modal__image} alt="#" />
        </div>
        <div className={style.modal__container}>
          <h3 className={style.modal__title}>{product?.productName}</h3>
          <span className={style.modal__price}>
            R$ {product?.price && formatPrice(product.price)}
          </span>
          <p className={style.modal__text}>{product?.descriptionShort}</p>
          <span className={style.modal__extra}>
            Veja mais detalhes do produto
          </span>
          <div className={style.modal__inputs}>
            <button className={style.modal__arithmetic} onClick={decrement}>
              -
            </button>
            <input
              className={style.modal__quantity}
              type="number"
              id="modal-quantity"
              name="modal-quantity"
              value={quantity}
              onChange={(e) => update(e.target.value)}
            />
            <button className={style.modal__arithmetic} onClick={increment}>
              +
            </button>
          </div>
          <button className={style.modal__button}>Comprar</button>
        </div>
        <button
          className={style.modal__close}
          onClick={() => {
            offModal();
          }}
        >
          X
        </button>
      </div>
    </aside>
  );
};

export default Modal;
