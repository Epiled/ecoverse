import React from "react";
import classNames from "classnames";

import devices from "@/assets/svg/icons-ui/devices.svg";
import supermarket from "@/assets/svg/icons-ui/supermarket.svg";
import whiskey from "@/assets/svg/icons-ui/whiskey.svg";
import tools from "@/assets/svg/icons-ui/tools.svg";
import healthCare from "@/assets/svg/icons-ui/health-care.svg";
import runningTreadmill from "@/assets/svg/icons-ui/running-treadmill.svg";
import fashion from "@/assets/svg/icons-ui/fashion.svg";

import style from "./styles.module.scss";

interface ICategory {
  image: string;
  text: string;
  default: boolean;
}

const ListCategories: ICategory[] = [
  {
    image: devices,
    text: "Tecnologia",
    default: false,
  },
  {
    image: supermarket,
    text: "Supermercado",
    default: true,
  },
  {
    image: whiskey,
    text: "Bebidas",
    default: true,
  },
  {
    image: tools,
    text: "Ferramentas",
    default: true,
  },
  {
    image: healthCare,
    text: "Saúde",
    default: true,
  },
  {
    image: runningTreadmill,
    text: "Esportes e Fitness",
    default: true,
  },
  {
    image: fashion,
    text: "Moda",
    default: true,
  },
];

const Categories: React.FC = () => {
  return (
    <div className={style.categories}>
      {ListCategories.map((item, index) => {
        return (
          <button
            key={index}
            className={classNames(style.category, {
              [style["category--active"]]: !item.default,
            })}
          >
            <div
              className={classNames(style.category__box, {
                [style["category__box--active"]]: !item.default,
              })}
            >
              <img className={style.category__image} src={item.image} alt="#" />
            </div>
            {item.text}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
