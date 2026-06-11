import React from "react";
import classNames from "classnames";

import { PartnerProps } from "./types";

import Button from "../Button";

import style from "./styles.module.scss";

const Partner: React.FC<PartnerProps> = ({ title, className }) => {
  return (
    <div
      className={classNames(style.partner, {
        [style[className || ""]]: className,
      })}
    >
      <div className={style.partner__content}>
        <h3 className={style.partner__title}>{title}</h3>
        <p className={style.partner__text}>
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <Button link="#" className="button--partner">
          Confira
        </Button>
      </div>
    </div>
  );
};

export default Partner;
