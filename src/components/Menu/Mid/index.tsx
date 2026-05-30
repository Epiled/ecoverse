/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import { Link } from "react-router-dom";

import { MidProps } from "./types";

import Group from "@/assets/svg/group.svg?react";
import Heart from "@/assets/svg/heart.svg?react";
import User from "@/assets/svg/user.svg?react";
import ShoppingCart from "@/assets/svg/shopping-cart.svg?react";
import MagnifyingGlass from "@/assets/svg/magnifying-glass.svg?react";
import Menu from "@/assets/svg/menu.svg?react";
import Close from "@/assets/svg/close.svg?react";
import logo from "@/assets/img/webp/logo.webp";

import style from "./styles.module.scss";

const Mid: React.FC<MidProps> = ({ menuOpen, setMenu, handlerMobileMenu }) => {
  return (
    <div className={style.mid}>
      <img
        className={style.mid__logo}
        src={logo}
        width={139}
        height={51}
        alt="Logo - VTEX"
      />

      <div className={style.mid__container}>
        <div className={style.mid__search}>
          <input
            className={style.mid__ipt}
            placeholder="O que você está buscando?"
            type="search"
            name=""
            id=""
          />
          <button className={style.mid__button} aria-label="Buscar">
            <MagnifyingGlass className={style.mid__iconButton} />
          </button>
        </div>

        {menuOpen ? (
          <Close
            className={style.mid__icon}
            width="50px"
            height="50px"
            title="Menu Fechado"
            onClick={() => {
              setMenu(!menuOpen);
              handlerMobileMenu();
            }}
          />
        ) : (
          <Menu
            className={style.mid__icon}
            width="50px"
            height="50px"
            title="Menu Aberto"
            onClick={() => {
              setMenu(!menuOpen);
              handlerMobileMenu();
            }}
          />
        )}
      </div>

      <nav className={style.mid__icons}>
        <Link
          className={style.mid__link}
          to={"/"}
          aria-label="Acessar acompanhamento de pedidos"
        >
          <Group
            className={`${style.mid__iconLink} ${style["mid__iconLink--fill"]}`}
          />
        </Link>
        <Link
          className={style.mid__link}
          to={"/"}
          aria-label="Acessar favoritos"
        >
          <Heart className={style.mid__iconLink} />
        </Link>
        <Link className={style.mid__link} to={"/"} aria-label="Acessar perfil">
          <User className={style.mid__iconLink} />
        </Link>
        <Link
          className={style.mid__link}
          to={"/"}
          aria-label="Acessar carrinho de compras"
        >
          <ShoppingCart className={style.mid__iconLink} />
        </Link>
      </nav>
    </div>
  );
};

export default Mid;
