import React from "react";
import classNames from "classnames";

import { CATEGORY_LIST } from "./constants.ts";

import { useFiltersContext } from "@/contexts/FiltersContext.tsx";

import style from "./styles.module.scss";

const Categories: React.FC = () => {
  const { setFilters } = useFiltersContext();

  return (
    <div className={style.categories}>
      {CATEGORY_LIST.map((item, index) => {
        return (
          <button
            key={`${item}-${index}`}
            className={classNames(style.category, {
              [style["category--active"]]: !item.default,
            })}
            onClick={() => setFilters({ category: item.link })}
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
