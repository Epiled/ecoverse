import React from "react";
import { Link } from "react-router-dom";

import Crown from "../../../assets/svg/crown.svg?react";

import style from "./styles.module.scss";

interface INavigation {
  menuHeight: number;
  menuRef: React.RefObject<HTMLDivElement>;
}

const Navigation: React.FC<INavigation> = ({ menuHeight, menuRef }) => {
  return (
    <div
      className={style.navigation}
      style={{ transform: `translateX(${menuHeight}px)` }}
      ref={menuRef}
    >
      <Link className={style.navigation__link} to="#">
        Todas Categorias
      </Link>
      <Link className={style.navigation__link} to="#">
        Supermercado
      </Link>
      <Link className={style.navigation__link} to="#">
        Livros
      </Link>
      <Link className={style.navigation__link} to="#">
        Moda
      </Link>
      <Link className={style.navigation__link} to="#">
        Lançamentos
      </Link>
      <Link
        className={`
          ${style.navigation__link} 
          ${style["navigation__link--highlight"]}
        `}
        to="#"
      >
        Ofertas do dia
      </Link>
      <Link className={style.navigation__link} to="#">
        <Crown className={style["navigation__link--crown"]} />
        Assinatura
      </Link>
    </div>
  );
};

export default Navigation;
