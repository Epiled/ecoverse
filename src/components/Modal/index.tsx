import { useState } from "react";

import { IProduct } from "../../interfaces/IProduct";

import photo from "../../assets/img/mobile.png";

import style from "./styles.module.scss";

interface ModalProps {
  product?: IProduct;
  offModal: (onModal: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ product, offModal }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

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
            R${" "}
            {product?.price
              .toFixed(2)
              .replace(".", ",")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
          <p className={style.modal__text}>{product?.descriptionShort}</p>
          <span className={style.modal__extra}>
            Veja mais detalhes do produto
          </span>
          <div className={style.modal__inputs}>
            <button
              className={style.modal__arithmetic}
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              className={style.modal__quantity}
              type="number"
              id="modalQuantidade"
              name="modalQuantidade"
              value={quantity}
              onChange={handleInputChange}
            />
            <button
              className={style.modal__arithmetic}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className={style.modal__button}>Comprar</button>
        </div>
        <button className={style.modal__close} onClick={() => offModal(false)}>
          X
        </button>
      </div>
    </aside>
  );
};

export default Modal;
