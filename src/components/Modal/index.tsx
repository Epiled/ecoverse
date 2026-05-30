import { useState } from "react";

import { IProduto } from "../../interfaces/IProduto";

import foto from "../../assets/img/mobile.png";

import style from "./styles.module.scss";

interface ModalProps {
  produtoSelecionado?: IProduto;
  offModal: (onModal: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ produtoSelecionado, offModal }) => {
  const [quantidade, setQuantidade] = useState(1);

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleIncrement = () => {
    setQuantidade(quantidade + 1);
  };

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantidade(value);
    }
  };

  return (
    <aside className={style.modal}>
      <div className={style.modal__box}>
        <div
          className={`${style.modal__container} ${style["modal__container--image"]}`}
        >
          <img src={foto} className={style.modal__image} alt="" />
        </div>
        <div className={style.modal__container}>
          <h3 className={style.modal__title}>
            {produtoSelecionado?.productName}
          </h3>
          <span className={style.modal__price}>
            R${" "}
            {produtoSelecionado?.price
              .toFixed(2)
              .replace(".", ",")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
          <p className={style.modal__text}>
            {produtoSelecionado?.descriptionShort}
          </p>
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
              value={quantidade}
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
