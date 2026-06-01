import React from "react";

import { ADVANTAGES_LIST } from "./constants.ts";

import style from "./styles.module.scss";

const Top: React.FC = () => {
  return (
    <div className={style.top}>
      {ADVANTAGES_LIST.map((item, index) => {
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
