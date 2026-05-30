import React from "react";

import shield from "@/assets/svg/shield-check.svg";
import truck from "@/assets/svg/truck.svg";
import creditCard from "@/assets/svg/credit-card.svg";

import style from "./styles.module.scss";

interface ITop {
  image: string;
  text: string;
  highlight: string;
  default?: boolean;
}

const TopSliderMock: ITop[] = [
  {
    image: shield,
    text: "Compra",
    highlight: " 100% segura",
    default: false,
  },
  {
    image: truck,
    text: "acima de R$ 200",
    highlight: "Frete grátis ",
    default: true,
  },
  {
    image: creditCard,
    text: "suas compras",
    highlight: "Parcele ",
    default: true,
  },
];

const Top: React.FC = () => {
  return (
    <div className={style.top}>
      {TopSliderMock.map((item, index) => {
        return (
          <span key={index} className={style.top__container}>
            <img
              className={style.top__image}
              src={item.image}
              width="20px"
              height="20px"
              alt="#"
            />

            {item.default ? (
              <span className={style.top__text}>
                <span className={style.top__highlight}>{item.highlight}</span>
                {item.text}
              </span>
            ) : (
              <span className={style.top__text}>
                {item.text}
                <span className={style.top__highlight}>{item.highlight}</span>
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Top;
