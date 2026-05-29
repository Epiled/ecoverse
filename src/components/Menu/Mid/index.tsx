/// <reference types="vite-plugin-svgr/client" />
import { Link } from "react-router-dom";

import Group from "../../../assets/svg/group.svg?react";
import Heart from "../../../assets/svg/heart.svg?react";
import User from "../../../assets/svg/user.svg?react";
import ShoppingCart from "../../../assets/svg/shopping-cart.svg?react";
import MagnifyingGlass from "../../../assets/svg/magnifying-glass.svg?react";
import Menu from "../../../assets/svg/menu.svg?react";
import Close from "../../../assets/svg/close.svg?react";
import logo from "../../../assets/img/webp/logo.webp";

import style from "./Mid.module.scss";
interface IMid {
  menuOpen: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  calculaMenu: () => void;
}

const Mid: React.FC<IMid> = ({ setMenu, menuOpen, calculaMenu }) => {
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
        <div className={style.mid__busca}>
          <input
            className={style.mid__ipt}
            placeholder="O que você está buscando?"
            type="search"
            name=""
            id=""
          />
          <button className={style.mid__btnBusca} aria-label="Buscar">
            <MagnifyingGlass className={style.mid__btnIcon} />
          </button>
        </div>

        {menuOpen ? (
          <Close
            className={style.mid__hamburguer}
            width="50px"
            height="50px"
            title="Menu Hamburguer Close"
            onClick={() => {
              setMenu(!menuOpen);
              calculaMenu();
            }}
          />
        ) : (
          <Menu
            className={style.mid__hamburguer}
            width="50px"
            height="50px"
            title="Menu Hamburguer Open"
            onClick={() => {
              setMenu(!menuOpen);
              calculaMenu();
            }}
          />
        )}
      </div>

      <nav className={style.mid__icons}>
        <Link
          className={style.mid__link}
          to={""}
          aria-label="Acessar acompanhamento de pedidos"
        >
          <Group
            className={`${style.mid__iconLink} ${style["mid__iconLink--fill"]}`}
          />
        </Link>
        <Link
          className={style.mid__link}
          to={""}
          aria-label="Acessar favoritos"
        >
          <Heart className={style.mid__iconLink} />
        </Link>
        <Link className={style.mid__link} to={""} aria-label="Acessar perfil">
          <User className={style.mid__iconLink} />
        </Link>
        <Link
          className={style.mid__link}
          to={""}
          aria-label="Acessar carrinho de compras"
        >
          <ShoppingCart className={style.mid__iconLink} />
        </Link>
      </nav>
    </div>
  );
};

export default Mid;
