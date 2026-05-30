/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button";

import Alelo from "../../assets/svg/payment-brands/alelo.svg?react";
import Amex from "../../assets/svg/payment-brands/amex.svg?react";
import Dinners from "../../assets/svg/payment-brands/dinners.svg?react";
import Elo from "../../assets/svg/payment-brands/elo.svg?react";
import Ifood from "../../assets/svg/payment-brands/ifood.svg?react";
import Mastercard from "../../assets/svg/payment-brands/mastercard.svg?react";
import Pix from "../../assets/svg/payment-brands/pix.svg?react";
import Sodexo from "../../assets/svg/payment-brands/sodexo.svg?react";
import Ticket from "../../assets/svg/payment-brands/ticket.svg?react";
import Visa from "../../assets/svg/payment-brands/visa.svg?react";

import RodapeImagem from "../../assets/svg/rodape__imagem.svg?react";

import Facebook from "../../assets/svg/social/facebook.svg?react";
import Instagram from "../../assets/svg/social/instagram.svg?react";
import Youtube from "../../assets/svg/social/youtube.svg?react";

import style from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrap}>
        <section>
          <h3
            className={`${style.footer__title} ${style["footer__title--alt"]}`}
          >
            Sobre nós
          </h3>
          <div className={style.footer__links}>
            <Link className={style.footer__link} to={"/"}>
              Conheça
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Como Comprar
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Indicação e Desconto
            </Link>
          </div>
          <div className={style.footer__social}>
            <Facebook />
            <Instagram />
            <Youtube />
          </div>
        </section>

        <section>
          <h3 className={style.footer__title}>Informações Úteis</h3>
          <div className={style.footer__links}>
            <Link className={style.footer__link} to={"/"}>
              Fale Conosco
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Dúvidas
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Prazos de entrega
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Formas de pagamento
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Política de privacidade
            </Link>
            <Link className={style.footer__link} to={"/"}>
              Trocas e devoluções
            </Link>
          </div>
        </section>

        <aside>
          <h3 className={style.footer__title}>Formas de Pagamento</h3>

          <div className={style.footer__payments}>
            <Alelo />
            <Amex />
            <Dinners />
            <Elo />
            <Ifood />
            <Mastercard />
            <Pix />
            <Sodexo />
            <Ticket />
            <Visa />
          </div>
        </aside>

        <aside className={style.footer__letter}>
          <h4
            className={`${style.footer__title} ${style["footer__title--letter"]}`}
          >
            Cadastre-se e Receba nossas
            <span className={style.footer__highlight}>
              novidades e promoções
            </span>
          </h4>
          <p className={style.footer__text}>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <form className={style.footer__form} action="">
            <input
              className={style.footer__input}
              placeholder="Seu e-mail"
              type="email"
              name=""
              id=""
            />
            <Button className={"button--form"} ancora="#">
              Ok
            </Button>
          </form>
        </aside>
      </div>

      <div className={style.footer__copyright}>
        <div className={`${style.footer__wrap} ${style["footer__wrap--alt"]}`}>
          <p className={style.footer__copy}>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </p>
          <RodapeImagem className={style.footer__image} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
