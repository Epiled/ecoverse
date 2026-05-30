import React from "react";
import Button from "../Button";
import style from "./styles.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={style.banner}>
      <div className={style.banner__wrap}>
        <div className={style.banner__flutuante}>
          <h1 className={style.banner__titulo}>
            Venha conhecer nossas promoções
            <span className={style.banner__desconto}>50% Off nos produtos</span>
          </h1>
          <Button ancora="#" className={"botao--banner"}>
            Ver Produto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
