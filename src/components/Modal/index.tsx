import React from "react";
import { createPortal } from "react-dom";

import { useModalContext } from "@/contexts/ModalContext";

import style from "./styles.module.scss";

const Modal: React.FC = () => {
  const { isOpen, content, offModal } = useModalContext();

  if (!isOpen || !content) return null;

  return createPortal(
    <aside className={style.modal}>
      <div className={style.modal__box}>
        <button
          className={style.modal__close}
          onClick={() => {
            offModal();
          }}
        >
          X
        </button>
        {content}
      </div>
    </aside>,
    document.body,
  );
};

export default Modal;
