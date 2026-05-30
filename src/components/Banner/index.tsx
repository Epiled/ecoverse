import React from "react";

import Button from "../Button";

import style from "./styles.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={style.banner}>
      <div className={style.banner__wrap}>
        <div className={style.banner__content}>
          <h1 className={style.banner__title}>
            Venha conhecer nossas promoções
            <span className={style.banner__discount}>50% Off nos produtos</span>
          </h1>
          <Button ancora="#" className={"button--banner"}>
            Ver Produto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
