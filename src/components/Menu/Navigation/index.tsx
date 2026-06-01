import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { NavigationProps } from "./types";

import Crown from "@/assets/svg/icons-ui/crown.svg?react";

import style from "./styles.module.scss";

const Navigation: React.FC<NavigationProps> = ({ isOpen, menuRef }) => {
  return (
    <div
      ref={menuRef}
      className={classNames(
        style.navigation,
        isOpen && style["navigation--active"],
      )}
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
