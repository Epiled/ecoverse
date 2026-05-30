import React from "react";
import { Link } from "react-router-dom";

import Partner from "../Partner";
import Title from "../Title";

import style from "./styles.module.scss";

const Related: React.FC = () => {
  return (
    <section className={style.related}>
      <Title>Produtos relacionados</Title>

      <Link className={style.related__link} to={"/"}>
        Ver todos
      </Link>

      <div className={style.related__partners}>
        <Partner title={"Produtos"} className={"partners--alt"} />
        <Partner title={"Produtos"} className={"partners--alt"} />
      </div>
    </section>
  );
};

export default Related;
